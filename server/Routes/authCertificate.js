const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");
const fs = require("fs");
const Certificates = require("../Models/certificateSchema");
const Certificateimage = require("../Models/certificateImageSchema");
const bulkCertificateSchema = require("../Models/BulkCertificateScheme");
const csvParser = require("csv-parser");
const axios = require("axios");
const { Certificate } = require("crypto");
const upload = require("../Middlewares/multer");

router.use(formidable());

// Create Certificate
router.post("/create-certificate", async (req, res) => {
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
    } = req.fields;
    const { image } = req.files;

    // Validation
    if (
      !certificatenum ||
      !color ||
      !weight ||
      !shape ||
      !sg ||
      !ri ||
      !hardness ||
      !microscopeob ||
      !conclusion
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (image && image.size > 8000000) {
      return res.status(400).json({ error: "Image should be less than 8MB" });
    }

    // Create new certificate
    const certificate = new Certificates({
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

    if (image) {
      certificate.image.data = fs.readFileSync(image.path);
      certificate.image.contentType = image.type;
    }

    await certificate.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Certificate created successfully",
        certificate,
      });
  } catch (error) {
    res.status(500).json({ error: "Error creating certificate" });
  }
});

// Get All Certificates
router.get("/get-certificates", async (req, res) => {
  try {
    const certificates = await Certificates.find({}).select("-image");
    res.status(200).json({ success: true, certificates });
  } catch (error) {
    res.status(500).json({ error: "Error fetching certificates" });
  }
});


// Get Single Certificate
router.get("/get-certificate/:id", async (req, res) => {
  try {
    const certificate = await Certificates.findById(req.params.id);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }
    res.status(200).json({ success: true, certificate });
  } catch (error) {
    res.status(500).json({ error: "Error fetching certificate" });
  }
});

// product image
router.get("/product-photo/:id", async (req, res) => {
  try {
    const certificate = await Certificates.findById(req.params.id).select(
      "image"
    );
    if (certificate && certificate.image && certificate.image.data) {
      res.set("Content-type", certificate.image.contentType);
      return res.status(200).send(certificate.image.data);
    } else {
      res.status(404).send({ error: "Image not found" });
      console.log("no image");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting photo",
      error,
    });
  }
});

// Delete Certificate
router.delete("/delete-certificate/:id", async (req, res) => {
  try {
    const certificate = await Certificates.findByIdAndDelete(req.params.id);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Certificate deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting certificate" });
  }
});

// Update Certificate
router.put("/update-certificate/:id", async (req, res) => {
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
    } = req.fields;
    const { image } = req.files;

    const certificate = await Certificates.findById(req.params.id);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }

    certificate.certificatenum = certificatenum || certificate.certificatenum;
    certificate.color = color || certificate.color;
    certificate.weight = weight || certificate.weight;
    certificate.shape = shape || certificate.shape;
    certificate.sg = sg || certificate.sg;
    certificate.ri = ri || certificate.ri;
    certificate.hardness = hardness || certificate.hardness;
    certificate.microscopeob = microscopeob || certificate.microscopeob;
    certificate.conclusion = conclusion || certificate.conclusion;

    if (image) {
      if (image.size > 1000000) {
        return res.status(400).json({ error: "Image should be less than 1MB" });
      }
      certificate.image.data = fs.readFileSync(image.path);
      certificate.image.contentType = image.type;
    }

    await certificate.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Certificate updated successfully",
        certificate,
      });
  } catch (error) {
    res.status(500).json({ error: "Error updating certificate" });
  }
});

// Delete Certificates
router.delete("/delete-certificates/:id", async (req, res) => {
  try {
    const certificate = await Certificates.findByIdAndDelete(req.params.id);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Certificate deleted successfully" });
  } catch (error) {
    console.error("Error deleting certificate:", error);
    res.status(500).json({ error: "Error deleting certificate" });
  }
});

// -------------------Certificate image------------------------

// Create Certificate
router.post("/create-certificateimg", async (req, res) => {
  try {
    const { certificatenum } = req.fields;
    const { image } = req.files;

    // Validation
    if (!certificatenum) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (image && image.size > 8000000) {
      return res.status(400).json({ error: "Image should be less than 8MB" });
    }

    // Create new certificate
    const certificate = new Certificateimage({
      certificatenum,
    });

    if (image) {
      certificate.image.data = fs.readFileSync(image.path);
      certificate.image.contentType = image.type;
    }

    await certificate.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Certificate created successfully",
        certificate,
      });
  } catch (error) {
    res.status(500).json({ error: "Error creating certificate" });
  }
});

// Get All custom Certificates


router.get('/get-customcertificates', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;         
    const limit = parseInt(req.query.limit) || 10;      
    const skip = (page - 1) * limit;
    const searchQuery = req.query.search || "";       

    const searchCondition = searchQuery
      ? { certificatenum: { $regex: searchQuery, $options: "i" } }
      : {};

    const total = await Certificateimage.countDocuments(searchCondition);

    const certificates = await Certificateimage.find(searchCondition)
      .select('-image') 
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 }); 

    res.status(200).json({
      success: true,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalResults: total,
      certificates,
    });
  } catch (error) {
    console.error("Error fetching certificates:", error);
    res.status(500).json({ error: "Error fetching certificates" });
  }
});


// Get Single custom Certificate
router.get("/get-customcertificate/:id", async (req, res) => {
  try {
    const certificate = await Certificateimage.findById(req.params.id);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }
    res.status(200).json({ success: true, certificate });
  } catch (error) {
    res.status(500).json({ error: "Error fetching certificate" });
  }
});

// get certificate photo
router.get("/certificate-photo/:id", async (req, res) => {
  try {
    const certificate = await Certificateimage.findById(req.params.id).select(
      "image"
    );
    if (certificate && certificate.image && certificate.image.data) {
      res.set("Content-type", certificate.image.contentType);
      return res.status(200).send(certificate.image.data);
    } else {
      res.status(404).send({ error: "Image not found" });
      console.log("no image");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting photo",
      error,
    });
  }
});

router.get("/custom-certificate-photo/:id", async (req, res) => {
  try {
    const certificate = await Certificateimage.findById(req.params.id);

    if (
      !certificate ||
      !certificate.image ||
      !certificate.image.data ||
      !certificate.image.contentType
    ) {
      return res.status(404).json({ error: "Certificate image not found" });
    }

    res.set("Content-Type", certificate.image.contentType);
    res.send(Buffer.from(certificate.image.data)); // <-- ensure proper Buffer
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving image" });
  }
});

// Update Certificate
router.put("/update-customcertificate/:id", async (req, res) => {
  try {
    const { certificatenum } = req.fields;
    const { image } = req.files;

    const certificate = await Certificateimage.findById(req.params.id);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }

    certificate.certificatenum = certificatenum || certificate.certificatenum;

    if (image) {
      if (image.size > 1000000) {
        return res.status(400).json({ error: "Image should be less than 1MB" });
      }
      certificate.image.data = fs.readFileSync(image.path);
      certificate.image.contentType = image.type;
    }

    await certificate.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Certificate updated successfully",
        certificate,
      });
  } catch (error) {
    res.status(500).json({ error: "Error updating certificate" });
  }
});

// Delete custom Certificate
router.delete("/delete-customcertificate/:id", async (req, res) => {
  try {
    const certificate = await Certificateimage.findByIdAndDelete(req.params.id);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Certificate deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting certificate" });
  }
});
router.get('/search-certificate/:certificatenum', async (req, res) => {
  const { certificatenum } = req.params;

  try {
    // 1. Check custom certificates first (priority)
    const custom = await Certificateimage.findOne({ certificatenum });
    if (custom) {
      return res.status(200).json({
        source: 'custom',
        certificate: custom,
      });
    }

    // 2. Then check bulk certificates
    const bulk = await bulkCertificateSchema.findOne({ certificatenum });
    if (bulk) {
      return res.status(200).json({
        source: 'bulk',
        certificate: bulk,
      });
    }

    const standard = await Certificates.findOne({ certificatenum });
    if (standard) {
      return res.status(200).json({
        source: 'standard',
        certificate: standard,
      });
    }

    res.status(404).json({ message: "Certificate not found" });
  } catch (error) {
    console.error("Error searching certificate:", error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports=router;