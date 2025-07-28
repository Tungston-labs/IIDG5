const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../Models/adminSchema');  
const User = require('../Models/userSchema');     
const authMiddleware = require('../Middlewares/authMiddleware');  
const roleMiddleware = require('../Middlewares/roleMiddleware');  
 
const router = express.Router();  
 
// 1. Predefine Admin User
async function createAdmin() {
    // Check if admin with the username 'vineeth' already exists
    const adminExists = await Admin.findOne({ username: 'vineeth' });
    if (adminExists) {
        console.log('Admin already exists.');
        return;
    }
    // If not, create a new admin
    const admin = new Admin({
        username: 'vineeth',
        email: 'vineeth123@gmail.com',
        password: 'Vine@123',
        role: 'admin'         
    });
    try {
        // Save the admin to the database
        const savedAdmin = await admin.save();  
        console.log('Admin created:', savedAdmin);
    } catch (error) {
        console.log('Error creating admin:', error);
    }
}
createAdmin();
 
 
// 2.Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log("TEST");
    try {
        // Check if the email belongs to an admin
        const admin = await Admin.findOne({ email });
        const user = await User.findOne({ email });
        let person;
        let role;
        let personname;
        if (admin) {
            person = admin;
            role = 'admin';
            personname=admin.username;
            console.log(admin.username)
        } else if (user) {
            person = user;
            role = 'employee';
            personname=user.username;
            console.log(role)
            console.log(user.username);
            console.log(user);
        } else {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
//         console.log('Provided Password:', password);
// console.log('Stored Hashed Password:', person.password);

        // Compare the given password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, person.password);
        // const isMatch = await bcrypt.compare(password, '$2b$10$7vGY1PkAsFDD1r56rCepTu0x5yYn9qvYnhYJ2cib7eCcjTfFHYmWm');  
        console.log(isMatch)
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        // Generate a JWT token
        const token = jwt.sign(
            { id: person._id, role: role, personname:personname },
            process.env.JWT_SECRET || 'secrtekey123',
            { expiresIn: '8h' }
        );
        // Return the token and role to the client
        res.json({ token, role: role,personname:personname });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
 
// 3. CRUD Operations (Admin Only)
 
 
// Create User
router.post('/create-user', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username)
    console.log(email)
    console.log(password)

    try {
        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Hashed Password:', hashedPassword);
        // Create new user
        const newUser = new User({ username, email, password:hashedPassword, role: 'employee' });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error); // Log the error to the console
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
});
 
// Edit User
router.put('/edit-user/:id', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    try {
        // Find the user by ID
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Update fields if provided
        if (username) user.username = username;
        if (email) user.email = email;
        if (password) {
            // Hash the new password before saving
            user.password = await bcrypt.hash(password, 10);
        }
        await user.save();
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
});
 
// Delete User
router.delete('/delete-user/:id', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
    const { id } = req.params;
    try {
        // Find the user by ID
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Delete the user
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
});
 
// Get Single User by ID
router.get('/get-user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        // Find the user by ID
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
});
 
// Get All Users
router.get('/get-all-users', async (req, res) => {
    try {
        // Retrieve all users from the database
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});
 
 
 
module.exports = router;  
 





// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const Admin = require('../Models/adminSchema');  
// const User = require('../Models/userSchema');     
// const authMiddleware = require('../Middlewares/authMiddleware');  
// const roleMiddleware = require('../Middlewares/roleMiddleware');  

// const router = express.Router();  

// // 1. Predefine Admin User
// async function createAdmin() {
//     // Check if admin with the username 'vineeth' already exists
//     const adminExists = await Admin.findOne({ username: 'vineeth' });
//     if (adminExists) {
//         console.log('Admin already exists.');
//         return;
//     }
//     // If not, create a new admin
//     const admin = new Admin({
//         username: 'vineeth',
//         email: 'vineeth123@gmail.com',
//         password: 'Vine@123', 
//         role: 'admin'         
//     });
//     try {
//         // Save the admin to the database
//         const savedAdmin = await admin.save();  
//         console.log('Admin created:', savedAdmin);
//     } catch (error) {
//         console.log('Error creating admin:', error);
//     } 
// }
// createAdmin(); 


// // 2.Login Route
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         // Check if the email belongs to an admin
//         const admin = await Admin.findOne({ email });
//         const user = await User.findOne({ email });
//         let person;
//         let role;
//         if (admin) {
//             person = admin;
//             role = 'admin';
//         } else if (user) {
//             person = user;
//             role = 'user';
//         } else {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }
//         // Compare the given password with the hashed password in the database
//         const isMatch = await bcrypt.compare(password, person.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }
//         // Generate a JWT token
//         const token = jwt.sign(
//             { id: person._id, role: role },
//             process.env.JWT_SECRET || 'secrtekey123', 
//             { expiresIn: '1h' }
//         );
//         // Return the token and role to the client
//         res.json({ token, role: role });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// });

// // 3. CRUD Operations (Admin Only)
// // Create User
// router.post('/create-user', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         // Check if user with the same email already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User with this email already exists' });
//         }
//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);
//         // Create new user
//         const newUser = new User({ username, email, password: hashedPassword, role: 'employee' });
//         await newUser.save();
//         res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         console.error('Error creating user:', error); // Log the error to the console
//         res.status(500).json({ message: 'Error creating user', error: error.message });
//     }
// });



// // router.post('/create-user', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
// //     const { username, email, password } = req.body;
// //     try {
// //         // Check if user with the same email already exists
// //         const existingUser = await User.findOne({ email });
// //         if (existingUser) {
// //             return res.status(400).json({ message: 'User with this email already exists' });
// //         }
// //         // Create new user
// //         const newUser = new User({ username, email, password, role: 'user'});
// //         await newUser.save();
// //         res.status(201).json({ message: 'User created successfully' });
// //     } catch (error) {
// //         res.status(500).json({ message: 'Error creating user', error });
// //     }
// // });


// // Edit User
// router.put('/edit-user/:id', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
//     const { id } = req.params;
//     const { username, email, password } = req.body;
//     try {
//         // Find the user by ID
//         const user = await User.findById(id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         // Update fields if provided
//         if (username) user.username = username;
//         if (email) user.email = email;
//         if (password) {
//             // Hash the new password before saving
//             user.password = await bcrypt.hash(password, 10);
//         }
//         await user.save();
//         res.status(200).json({ message: 'User updated successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating user', error });
//     }
// });


// // Delete User
// router.delete('/delete-user/:id', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
//     const { id } = req.params;
//     try {
//         // Find the user by ID
//         const user = await User.findById(id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         // Delete the user
//         await User.findByIdAndDelete(id);
//         res.status(200).json({ message: 'User deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error deleting user', error });
//     }
// });


// module.exports = router;  // Export the router for use in server.js
