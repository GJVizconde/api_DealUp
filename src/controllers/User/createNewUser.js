const { User } = require('../../db');
const { handleUpload } = require('../../cloudinary/cloudinaryService');

const createNewUser = async (
  fullName,
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
  path
) => {
  try {
    if (path) {
      const avatarUpload = await handleUpload(path);

      const newUser = await User.create({
        fullName,
        email,
        rol,
        password,
        gender,
        birthdate,
        phone,
        country,
        avatar: avatarUpload.secure_url,
        status,
        thirdPartyCreated,
      });

      return newUser;
    }

    const newUser = await User.create({
      fullName,
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
