const { JWT_RECOVERY: jwtRecovery } = process.env;
const { v4: uuidv4 } = require('uuid'); // Importamos la función uuidv4 para generar identificadores únicos
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
      throw new Error('Email already registered, confirm your email');
    }

    //Generamos el token

    const uniqueId = uuidv4();
    const token = generateJWT(user, jwtRecovery, uniqueId);

    //Enviamos el correo electronico

    const template = recoveryTemplate(user.fullName, token);

    await sendEmail(email, 'Reset your DealUp password', template);

    const data =
      'Recovery email was sent successfully. Please check your inbox for further instructions.';

    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmailRecovery;
