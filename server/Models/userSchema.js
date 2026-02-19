const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, 
    email: { type: String, required: true, unique: true },    
    password: { type: String, required: true },               
    role: { type: String, default: 'employee' },                
    isBlocked: { type: Boolean, default: false }               
}, { timestamps: true }); 


const User = mongoose.model('User', userSchema);  

module.exports = User;  
