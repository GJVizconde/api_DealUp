const { User } = require('../../db');
const { handleUpload } = require('../../services/cloudinaryService');

const createNewUser = async (
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
  thirdPartyCreated,
  path,
  url
) => {
  try {
    if (path) {
      const avatarUpload = await handleUpload(path);

      const newUser = await User.create({
        fullName,
        email,
        role,
        password,
        gender,
        birthdate,
        phone,
        country,
        avatar: avatarUpload.secure_url,
        status,
        confirmEmail,
        thirdPartyCreated,
      });

      return newUser;
    }

    const avatarUpload = avatar ? await handleUpload(avatar) : avatar;

    const newUser = await User.create({
      fullName,
      email,
      role,
      password,
      dni,
      gender,
      birthdate,
      phone,
      country,
      avatar: avatarUpload.secure_url,
      status,
      confirmEmail,
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
