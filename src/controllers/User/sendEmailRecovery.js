const { JWT_RECOVERY: jwtRecovery } = process.env;
const { generateJWT } = require('../../config/JWT');
const { recoveryTemplate, sendEmail } = require('../../config/mailConfig');
const { User } = require('../../db');

const sendEmailRecovery = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('Email not register');
    }

    if (user && user.confirmEmail === false) {
      throw new Error('Please register again');
    }

    //Generamos el token

    const token = generateJWT(user, jwtRecovery);

    //Enviamos el correo electronico

    const template = recoveryTemplate(user.fullName, token);

    await sendEmail(email, 'Reset your DealUp password', template);

    const data = {
      message:
        'Recovery email was sent successfully. Please check your inbox for further instructions.',
    };

    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmailRecovery;
