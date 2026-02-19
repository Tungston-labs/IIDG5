const mongoose = require('mongoose');

const certificateImageSchema = mongoose.Schema({
  certificatenum: { type: String, required: true, unique: true },
  image : { data: Buffer, contentType: String },
  // qrCodeImage: {data: Buffer, contentType: String, required: true , unique: true }
},

{ timestamps: true }

);
certificateImageSchema.index({ certificatenum: 1 });

module.exports = mongoose.model('Certificateimage', certificateImageSchema);