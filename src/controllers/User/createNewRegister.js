const { generateJWT } = require('../../config/JWT');
const { registerTemplate, sendEmail } = require('../../config/mailConfig');
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
        await registeredUser.destroy({ force: true });
      } else {
        throw new Error('Email already registered');
      }
    }

    if (!avatar) {
      avatar =
        'https://res.cloudinary.com/dgx2v3fnk/image/upload/v1690996230/mzvrcm2yubcscmbdbdqo.webp';
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

    const template = registerTemplate(newRegister.fullName, token);

    await sendEmail(newRegister.email, 'Confirm Email', template);

    const result = {
      message: 'Register successfully, an email was sent, please confirm',
      newRegister,
    };

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = createNewRegister;
