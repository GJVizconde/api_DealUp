const { generateJWT } = require('../../config/JWT');
const { registerTemplate, sendEmail } = require('../../config/mailConfig');
const { JWT_SECRET: jwtSecret, JWT_REGISTER: jwtRegister } = process.env;
const { User } = require('../../db');
const bcrypt = require('bcrypt');

const loginUser = async (email, password) => {
  const userRegistered = await User.findOne({
    where: { email },
  });

  if (!userRegistered) throw new Error('Email or password does not match!');

  //! Si encutra usuario pero no ha confirmado correo de una vez enviar correo
  if (userRegistered.confirmEmail === false) {
    const token = generateJWT(userRegistered, jwtRegister);

    const template = registerTemplate(userRegistered.fullName, token);

    await sendEmail(userRegistered.email, 'Confirm Email', template);

    return 'Email not confirmed, Please Check your inbox';
  }

  // if (userRegistered.password !== password)
  //   throw new Error('Email or password does not match!');

  const isPasswordMatch = bcrypt.compareSync(password, userRegistered.password);

  if (!isPasswordMatch) {
    return { error: 'Email or password does not match!' };
  }

  const data = {
    data: userRegistered,
    accessToken: generateJWT(userRegistered, jwtSecret),
  };

  return data;
};

module.exports = loginUser;
