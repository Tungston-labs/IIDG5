const mongoose = require('mongoose');

const certificateImageSchema = mongoose.Schema({
  certificatenum: { type: String, required: true, unique: true },
  image : { data: Buffer, contentType: String },
  // qrCodeImage: {data: Buffer, contentType: String, required: true , unique: true }
},

{ timestamps: true }

);

module.exports = mongoose.model('Certificateimage', certificateImageSchema);