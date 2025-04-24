const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,           // "smtp.gmail.com"
      port: Number(process.env.EMAIL_PORT),     // 465
      secure: process.env.EMAIL_SECURE === "true", // true (for port 465)
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false, // Optional: helps bypass certificate issues
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("Email sent!");
  } catch (error) {
    console.log("Email not sent!");
    console.log(error);
  }
};
