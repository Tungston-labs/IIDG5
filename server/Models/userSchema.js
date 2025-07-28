const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },  // Unique username
    email: { type: String, required: true, unique: true },     // Unique email
    password: { type: String, required: true },                // Password field
    role: { type: String, default: 'employee' },                // Default role is 'employee'
    isBlocked: { type: Boolean, default: false }               // Field to block/unblock users
}, { timestamps: true });  // Add timestamps for creation and update times

// Hash the password before saving
// userSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//     }
//     next();
// });

const User = mongoose.model('User', userSchema);  // Create User model

module.exports = User;  // Export the model
