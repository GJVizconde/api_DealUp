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

    return newRegister;
  } catch (error) {
    throw new Error('Error creating a new register: ' + error.message);
  }
};

module.exports = createNewRegister;
