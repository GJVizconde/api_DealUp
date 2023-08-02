const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASSWORD } = process.env;

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
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
          <img src="https://res.cloudinary.com/dgx2v3fnk/image/upload/v1690962284/fquqtc1tjkoq2ypb0haf.png" alt="">
          <h2>Hola ${name}</h2>
          <p>Welcome to DealUp!, Your new community, where we connect enterpreneus with invesments</p>
          <p>To confirm your account, please access the following link.</p>
          <a
              href="http://localhost:3001/user/register/confirm/${token}"
              target="_blank"
          >Confirm Account</a>
      </div>
    `;
};

module.exports = {
  sendEmail,
  getTemplate,
};
