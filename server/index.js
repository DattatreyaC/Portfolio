import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true if port 465, false for 587
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post("/send-email", async (req, res) => {
    const { from_name, from_email, message } = req.body;

    if (!from_name || !from_email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const mailOptions = {
        from: `"${from_name}" <${from_email}>`, // sender info
        to: process.env.EMAIL_USER, // your email (receiver)
        subject: `New message from ${from_name}`,
        text: message,
        html: `<p>${message}</p><p>From: ${from_name} (${from_email})</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
