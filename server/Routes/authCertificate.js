const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");
const fs = require("fs");
const Certificates = require("../Models/certificateSchema");
const Certificateimage = require("../Models/certificateImageSchema");
const bulkCertificateSchema = require("../Models/BulkCertificateScheme");
const csvParser = require("csv-parser");
const axios = require("axios");
// Middleware for handling multipart/form-data
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

//different certificates
// router.get('/get-certificates', async (req, res) => {
//     try {
//         // Fetch certificates from the Certificates collection
//         const certificates = await Certificates.find({}).select('-image');

//         // Fetch certificates from the CertificateImage collection
//         const certificateImages = await Certificateimage.find({}).select('-image');

//         // Combine the two datasets
//         const combinedCertificates = [...certificates, ...certificateImages].map(item => item.toObject());

//         res.status(200).json({ success: true, certificates: combinedCertificates });
//     } catch (error) {
//         console.error('Error fetching certificates:', error);
//         res.status(500).json({ error: "Error fetching certificates" });
//     }
// });

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
        const certificates = await Certificateimage.find({}).select('-image');
        res.status(200).json({ success: true, certificates });
    } catch (error) {
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

// Ensure express-fileupload middleware is loaded

router.post("/upload-csv", async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ error: "CSV file is required" });
    }

    const file = req.files.file;

    if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
      return res
        .status(400)
        .json({ error: "Invalid file format. Please upload a CSV file" });
    }

    const results = [];

    fs.createReadStream(file.path)
      .pipe(csvParser())
      .on("data", (row) => {
        if (
          !row.certificatenum ||
          !row.color ||
          !row.weight ||
          !row.shape ||
          !row.sg ||
          !row.ri ||
          !row.hardness ||
          !row.microscopeob ||
          !row.conclusion
        ) {
          console.warn("Skipping invalid row:", row);
          return;
        }

        results.push({
          certificatenum: row.certificatenum,
          color: row.color,
          weight: row.weight,
          shape: row.shape,
          sg: row.sg,
          ri: row.ri,
          hardness: row.hardness,
          microscopeob: row.microscopeob,
          conclusion: row.conclusion,
          image: null, // Ensure image is null initially
        });
      })
      .on("end", async () => {
        try {
          if (results.length === 0) {
            return res
              .status(400)
              .json({ error: "No valid rows found in CSV file" });
          }

          const certificateNums = results.map((item) => item.certificatenum);
          const existingCertificates = await bulkCertificateSchema.find({
            certificatenum: { $in: certificateNums },
          });
          const existingNums = new Set(
            existingCertificates.map((cert) => cert.certificatenum)
          );

          const filteredResults = results.filter(
            (item) => !existingNums.has(item.certificatenum)
          );

          if (filteredResults.length > 0) {
            const insertResult = await bulkCertificateSchema.insertMany(
              filteredResults,
              { ordered: false }
            );
            return res.status(201).json({
              success: true,
              message: `CSV uploaded successfully. ${insertResult.length} certificates inserted.`,
              data: insertResult,
            });
          } else {
            return res
              .status(400)
              .json({
                error:
                  "No new data inserted. All entries are duplicates or invalid.",
              });
          }
        } catch (dbError) {
          console.error("Database Error:", dbError);
          return res
            .status(500)
            .json({
              error: "Error saving data to database",
              details: dbError.message,
            });
        }
      })
      .on("error", (error) => {
        console.error("CSV Parsing Error:", error);
        return res
          .status(500)
          .json({ error: "Error reading CSV file", details: error.message });
      });
  } catch (error) {
    console.error("Upload Error:", error);
    return res
      .status(500)
      .json({ error: "Error uploading CSV file", details: error.message });
  }
});

//Get BulkUpload Certificate
router.get("/bulk-certificates", async (req, res) => {
  try {
    const bulkCertificates = await bulkCertificateSchema
      .find()
      .sort({ createdAt: -1 });
    res.status(200).json({ certificates: bulkCertificates });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bulk certificates." });
  }
});

//Delete Bulk Uploaded Certificate
router.delete("/bulk-certificates/:id", async (req, res) => {
  try {
    await bulkCertificateSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Certificate deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete certificate." });
  }
});

//Get BulkUpload Certificate
router.get("/bulk-certificates/:id", async (req, res) => {
  try {
    const certificate = await bulkCertificateSchema.findById(req.params.id);
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
    const certificates = await bulkCertificateSchema.find({}).select("-image");
    res.status(200).json({ success: true, certificates: certificates });
  } catch (error) {
    res.status(500).json({ error: "Error fetching certificates" });
  }
});

//Delete Bulk Uploaded Certificate
router.delete("/bulk-certificates/:id", async (req, res) => {
  try {
    await bulkCertificateSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Certificate deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete certificate." });
  }
});

router.put("/update-bulkcertificate/:id", async (req, res) => {
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

    // Find the certificate
    const certificate = await bulkCertificateSchema.findById(req.params.id);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }

    // Update fields if provided
    certificate.certificatenum = certificatenum || certificate.certificatenum;
    certificate.color = color || certificate.color;
    certificate.weight = weight || certificate.weight;
    certificate.shape = shape || certificate.shape;
    certificate.sg = sg || certificate.sg;
    certificate.ri = ri || certificate.ri;
    certificate.hardness = hardness || certificate.hardness;
    certificate.microscopeob = microscopeob || certificate.microscopeob;
    certificate.conclusion = conclusion || certificate.conclusion;

    // Handle image update
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
        message: "Bulk certificate updated successfully",
        certificate,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating bulk certificate" });
  }
});

router.get("/bulk-certificate-photo/:id", async (req, res) => {
  try {
    const certificate = await bulkCertificateSchema.findById(req.params.id);

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

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const formidable = require('express-formidable');
// const fs = require('fs');
// const Certificates = require('../Models/certificateSchema');

// // Create Certificate
// router.post('/create-certificate', formidable(), async (req, res) => {
//     try {
//         const { certificatenum, color, weight, shape, sg, ri, hardness, microscopeob, conclusion } = req.fields;
//         const { image } = req.files;

//         // Validation
//         if (!certificatenum || !color || !weight || !sg || !ri || !hardness || !microscopeob || !conclusion) {
//             return res.status(400).send({ error: 'All fields are required' });
//         }

//         if (image && image.size > 3000000) {
//             return res.status(400).send({ error: 'Image should be less than 3mb' });
//         }

//         const certificate = new Certificates({ certificatenum, color, weight, shape, sg, ri, hardness, microscopeob, conclusion, image });

//         if (image) {
//             certificate.image.data = fs.readFileSync(image.path);
//             certificate.image.contentType = image.type;
//         }

//         await certificate.save();
//         res.status(201).send({ success: true, message: "Certificate created successfully", certificate });
//     } catch (error) {
//         res.status(500).send({ error: "Error creating certificate" });
//     }
// });

// // Get All Certificates
// router.get('/get-certificates', async (req, res) => {
//     try {
//         const certificates = await Certificates.find({});
//         res.status(200).send({ success: true, certificates });
//     } catch (error) {
//         res.status(500).send({ error: "Error fetching certificates" });
//     }
// });

// // Get Single Certificate
// router.get('/get-certificate/:id', async (req, res) => {
//     try {
//         const certificate = await Certificates.findById(req.params.id);

//         if (!certificate) {
//             return res.status(404).send({ error: "Certificate not found" });
//         }

//         res.status(200).send({ success: true, certificate });
//     } catch (error) {
//         res.status(500).send({ error: "Error fetching certificate" });
//     }
// });

// // Delete Certificate
// router.delete('/delete-certificate/:id', async (req, res) => {
//     try {
//         const certificate = await Certificates.findByIdAndDelete(req.params.id);

//         if (!certificate) {
//             return res.status(404).send({ error: "Certificate not found" });
//         }

//         res.status(200).send({ success: true, message: "Certificate deleted successfully" });
//     } catch (error) {
//         res.status(500).send({ error: "Error deleting certificate" });
//     }
// });

// // Update Certificate
// router.put('/update-certificate/:id', formidable(), async (req, res) => {
//     try {
//         const { certificatenum, color, weight, shape, sg, ri, hardness, microscopeob, conclusion } = req.fields;
//         const { image } = req.files;

//         const certificate = await Certificates.findById(req.params.id);

//         if (!certificate) {
//             return res.status(404).send({ error: "Certificate not found" });
//         }

//         certificate.certificatenum = certificatenum || certificate.certificatenum;
//         certificate.color = color || certificate.color;
//         certificate.weight = weight || certificate.weight;
//         certificate.shape = shape || certificate.shape;
//         certificate.sg = sg || certificate.sg;
//         certificate.ri = ri || certificate.ri;
//         certificate.hardness = hardness || certificate.hardness;
//         certificate.microscopeob = microscopeob || certificate.microscopeob;
//         certificate.conclusion = conclusion || certificate.conclusion;

//         if (image) {
//             if (image.size > 1000000) {
//                 return res.status(400).send({ error: 'Image should be less than 1mb' });
//             }
//             certificate.image.data = fs.readFileSync(image.path);
//             certificate.image.contentType = image.type;
//         }

//         await certificate.save();
//         res.status(200).send({ success: true, message: "Certificate updated successfully", certificate });
//     } catch (error) {
//         res.status(500).send({ error: "Error updating certificate" });
//     }
// });

// module.exports = router;

// router.delete('/delete-certificates', async (req, res) => {
//     try {
//         console.log(req.body); // This should now log the request body to the console

//         const { ids } = req.body;
//         if (!ids || !Array.isArray(ids)) {
//             return res.status(400).json({ error: "No certificate IDs provided" });
//         }

//         const result = await Certificates.deleteMany({ _id: { $in: ids } });

//         res.status(200).json({ success: true, message: `${result.deletedCount} certificates deleted successfully` });
//     } catch (error) {
//         console.error("Server Error:", error);
//         res.status(500).json({ error: "Error deleting certificates" });
//     }
// });

// // Delete Multiple Certificates
// router.delete('/delete-certificates', async (req, res) => {
//     console.log(req.body);
//     try {
//         const { ids } = req.body;
//         if (!ids || !Array.isArray(ids)) {
//             return res.status(400).json({ error: "No certificate IDs provided" });
//         }

//         const result = await Certificates.deleteMany({ _id: { $in: ids } });

//         res.status(200).json({ success: true, message: `${result.deletedCount} certificates deleted successfully` });
//     } catch (error) {
//         res.status(500).json({ error: "Error deleting certificates" });
//     }
// });
