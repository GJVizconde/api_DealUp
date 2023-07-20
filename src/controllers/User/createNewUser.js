const { User } = require('../../db');

const createNewUser = async (
  name,
  email,
  rol,
  password,
  gender,
  birthdate,
  phone,
  country,
  avatar,
  status,
  thirdPartyCreated
) => {
  try {
    const newUser = await User.create({
      name,
      email,
      rol,
      password,
      gender,
      birthdate,
      phone,
      country,
      avatar,
      status,
      thirdPartyCreated,
    });

    return newUser;
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      throw new Error('Validation error ' + error.message);
    }

    throw new Error('Failed to created a new user:' + error.message);
  }
};

module.exports = createNewUser;
