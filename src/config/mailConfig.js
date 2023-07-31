const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASSWORD } = process.env;

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
});

const sendEmail = async (email, subject, html) => {
  try {
    await transporter.sendMail({
      from: `Deal UP! <${EMAIL_USER}>`,
      to: email,
      subject,
      text: 'Hello friends',
      html,
    });
  } catch (error) {
    console.log('Something is wrong with the email', error);
  }
};

const getTemplate = (name, token) => {
  return `
      <head>
          <link rel="stylesheet" href="./style.css">
      </head>
      
      <div id="email___content">
          <img src="https://i.imgur.com/eboNR82.png" alt="">
          <h2>Hola ${name}</h2>
          <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
          <a
              href="http://localhost:4000/api/user/confirm/${token}"
              target="_blank"
          >Confirmar Cuenta</a>
      </div>
    `;
};

module.exports = {
  sendEmail,
  getTemplate,
};
