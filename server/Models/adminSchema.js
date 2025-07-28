const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Admin Schema
const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },  // Unique username
    email: { type: String, required: true, unique: true },     // Unique email
    password: { type: String, required: true },                // Password field
    role: { type: String, default: 'admin' }                   // Default role is 'admin'
}, { timestamps: true });  // Add timestamps for creation and update times

// Hash the password before saving
adminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

const Admin = mongoose.model('Admin', adminSchema);  // Create Admin model

module.exports = Admin;  // Export the model
