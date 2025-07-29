const mongoose = require('mongoose');

const bulkCertificateSchema = new mongoose.Schema(
  {
    certificatenum: { type: String, required: true, unique: true },
    color: { type: String, required: true },
    weight: { type: String, required: true },
    shape: { type: String, required: true },
    sg: { type: String, required: true },
    ri: { type: String, required: true },
    hardness: { type: String, required: true },
    microscopeob: { type: String, required: true },
    conclusion: { type: String, required: true },
    image: { data: Buffer, contentType: String }
  },
  { timestamps: true }
);
bulkCertificateSchema.index({ certificatenum: 1 });

module.exports = mongoose.model('BulkCertificate', bulkCertificateSchema);
