import express, { json } from "express";
import { createTransport } from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(
    cors({
        origin: "https://portfolio-dattatreyac.vercel.app",
    }),
);
app.use(json());

// Create transporter using your .env credentials
const transporter = createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password (no spaces)
    },
});

// Test transporter connection (optional)
transporter.verify(function (error, success) {
    if (error) {
        console.log("Error verifying transporter:", error);
    } else {
        console.log("Server is ready to send emails");
    }
});

app.post("/send-email", (req, res) => {
    const { from_name, from_email, message } = req.body;

    if (!from_name || !from_email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER, // Must be your verified Gmail
        to: process.env.EMAIL_RECEIVER, // Receiver (your email)
        subject: `New message from ${from_name}`,
        replyTo: from_email, // So you can reply to sender
        text: message,
        html: `<p><strong>From:</strong> ${from_name} (${from_email})</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending mail:", error);
            return res.status(500).json({ error: "Failed to send email" });
        } else {
            console.log("Email sent:", info.response);
            return res.status(200).json({ message: "Email sent successfully" });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
