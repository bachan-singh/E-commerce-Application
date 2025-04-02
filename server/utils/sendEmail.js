const nodemailer = require('nodemailer');

const sendEmail = async (options) => {

    // Create a Transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD
        }
    })

    // Define the email options
    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    // Sending the Email
    await transporter.sendEmail(mailOptions);

}

module.exports = sendEmail;