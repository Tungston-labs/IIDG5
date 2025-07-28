const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
 
const sendEmail = async (formData) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // SSL connection
        auth: {
            user: process.env.MAILER_EMAIL,
            pass: process.env.MAIL_PASSWORD,
        },
    });
 
    const info = await transporter.sendMail({
        from: `IIDG Contact Form <${process.env.MAILER_EMAIL}>`, // sender address
        to: "anamikaprakash1000@gmail.com", // receiver address
        subject: "New Contact Form Submission", // Subject line
        html: `
            <h1>New Contact Form Submission</h1>
            <p><strong>First Name:</strong> ${formData.firstName}</p>
            <p><strong>Last Name:</strong> ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
        `,
    });
 
    return info;
};
 
module.exports = sendEmail;