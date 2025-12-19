const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");
const fs = require("fs");
const BulkCertificate = require("../Models/BulkCertificateScheme");
const csvParser = require("csv-parser");
const axios = require("axios");
const { Certificate } = require("crypto");
const upload = require("../Middlewares/multer");

router.post(
  "/upload-csv",
  upload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "CSV file required" });
      }

      const results = [];

      fs.createReadStream(req.file.path)
        .pipe(csvParser())
        .on("data", (row) => {
          if (!row.certificatenum) return;

          results.push({
            certificatenum: row.certificatenum.trim(),
            color: row.color,
            weight: row.weight,
            shape: row.shape,
            sg: row.sg,
            ri: row.ri,
            hardness: row.hardness,
            microscopeob: row.microscopeob,
            conclusion: row.conclusion,
            image: null,
          });
        })
        .on("end", async () => {
          fs.unlinkSync(req.file.path);

          const nums = results.map((r) => r.certificatenum);
          const existing = await BulkCertificate.find({
            certificatenum: { $in: nums },
          });

          const existingSet = new Set(existing.map((e) => e.certificatenum));
          const filtered = results.filter(
            (r) => !existingSet.has(r.certificatenum)
          );

          const inserted = await BulkCertificate.insertMany(filtered, {
            ordered: false,
          });

          res.json({
            success: true,
            insertedCount: inserted.length,
          });
        });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "CSV upload failed" });
    }
  }
);


router.get("/bulk-certificates", async (req, res) => {
  try {
    const bulkCertificates = await BulkCertificate
      .find()
      .sort({ createdAt: -1 });
    res.status(200).json({ certificates: bulkCertificates });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bulk certificates." });
  }
});

router.delete("/bulk-certificates/:id", async (req, res) => {
  try {
    console.log("DELETE ID:", req.params.id);

    const deleted = await BulkCertificate.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Certificate not found" });
    }

    res.status(200).json({
      success: true,
      message: "Certificate deleted successfully",
    });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});


router.get("/bulk-certificates/:id", async (req, res) => {
  try {
    const certificate = await BulkCertificate.findById(req.params.id);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }
    res.status(200).json({ certificate: certificate });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bulk certificate." });
  }
});
router.get("/get-bulkcertificates", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;     
    const limit = parseInt(req.query.limit) || 10;  
    const skip = (page - 1) * limit;

    const total = await BulkCertificate.countDocuments();

    const certificates = await BulkCertificate.find({})
      .select("-image")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      certificates,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching certificates" });
  }
});

router.post("/bulk-delete", async (req, res) => {
  await BulkCertificate.deleteMany({ _id: { $in: req.body.ids } });
  res.json({ success: true });
});

router.delete("/bulk-certificates/:id", async (req, res) => {
  try {
    await BulkCertificate.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Certificate deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete certificate." });
  }
});


router.put(
  "/update-bulkcertificate/:id",
  upload.single("image"),
  async (req, res) => {
    try {
      const {
        certificatenum,
        color,
        weight,
        shape,
        sg,
        ri,
        hardness,
        microscopeob,
        conclusion,
      } = req.body;

      const certificate = await BulkCertificate.findById(req.params.id);
      if (!certificate) {
        return res.status(404).json({ error: "Certificate not found" });
      }

      Object.assign(certificate, {
        certificatenum,
        color,
        weight,
        shape,
        sg,
        ri,
        hardness,
        microscopeob,
        conclusion,
      });

      if (req.file) {
        certificate.image = {
          data: fs.readFileSync(req.file.path),
          contentType: req.file.mimetype,
        };
      }

      await certificate.save();
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Update failed" });
    }
  }
);


router.get("/bulk-certificate-photo/:id", async (req, res) => {
  try {
    const certificate = await BulkCertificate.findById(req.params.id);

    if (!certificate || !certificate.image || !certificate.image.data) {
      return res.status(404).json({ error: "No image found" });
    }

    res.set("Content-Type", certificate.image.contentType);
    return res.send(certificate.image.data);
  } catch (error) {
    console.error("Error fetching image:", error);
    return res.status(500).json({ error: "Error fetching image" });
  }
});

router.post(
  "/upload-images",
  upload.array("images", 500),
  async (req, res) => {
    try {
      const updated = [];
      const skipped = [];

      for (const file of req.files) {
        const certificatenum = file.originalname.split(".")[0];

        const cert = await BulkCertificate.findOne({ certificatenum });

        if (!cert) {
          skipped.push(certificatenum);
          continue;
        }

        cert.image = {
          data: fs.readFileSync(file.path),
          contentType: file.mimetype,
        };

        await cert.save();
        updated.push(certificatenum);
      }

      res.json({
        success: true,
        updatedCount: updated.length,
        skipped,
      });
    } catch (err) {
      console.error("Image upload error:", err);
      res.status(500).json({ error: "Image upload failed" });
    }
  }
);

module.exports = router;