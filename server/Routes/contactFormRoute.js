const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/sendMail');
 
router.post('/send-contact-form', async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, message } = req.body;
 
        await sendEmail({ firstName, lastName, email, phoneNumber, message });
 
        res.status(200).json({ message: "Your message has been sent successfully!" });
    } catch (error) {
        console.error("Failed to send email", error);
        res.status(500).json({ message: "Failed to send message" });
    }
});
 
module.exports = router;