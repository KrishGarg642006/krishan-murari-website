const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/book-vet', async (req, res) => {
  const { name, phone, address } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'business.krishanmurari@gmail.com',
    subject: 'New Veterinary Visit Booking',
    html: `
      <h2>New Veterinary Visit Booking</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Farm Address:</strong> ${address}</p>
      <p><strong>Booking Time:</strong> ${new Date().toLocaleString()}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Booking request sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send booking request. Please try again.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 