const { generateJWT } = require('../../config/JWT');
const { getTemplate, sendEmail } = require('../../config/mailConfig');
const { JWT_REGISTER: jwtRegister } = process.env;
const { User } = require('../../db');

const createNewRegister = async (
  fullName,
  email,
  role,
  password,
  dni,
  gender,
  birthdate,
  phone,
  country,
  avatar,
  status,
  confirmEmail,
  thirdPartyCreated
) => {
  try {
    let registeredUser = await User.findOne({ where: { email } });

    if (registeredUser) {
      if (registeredUser.confirmEmail === false) {
        await registeredUser.destroy();
      } else {
        throw new Error('Email already registered');
      }
    }

    const newRegister = await User.create({
      fullName,
      email,
      role,
      password,
      gender,
      dni,
      birthdate,
      phone,
      country,
      avatar,
      status,
      confirmEmail,
      thirdPartyCreated,
    });

    const token = generateJWT(newRegister, jwtRegister);

    const data = {
      msg: 'Register succesful',
      newRegister,
      token,
    };

    const template = getTemplate(newRegister.fullName, token);

    await sendEmail(newRegister.email, 'Este es un mail de prueba', template);

    return data;
  } catch (error) {
    throw new Error('Error creating a new register: ' + error.message);
  }
};

module.exports = createNewRegister;
