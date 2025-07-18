import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// POST /send endpoint
router.post("/send", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("📨 Form data received:", { name, email, message });

  // Validate input
  if (!name || !email || !message) {
    console.log("❌ Missing fields");
    return res.status(400).send("All fields are required");
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Configure email
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("❌ Email send error:", error);
    res.status(500).json({ 
      error: "Error sending message",
      details: error.message 
    });
  }
});

export default router;