const { User } = require('../../db');
const { handleUpload } = require('../../services/cloudinaryService');
const { hashPass } = require('../../config/bcryptConfig');

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
    const hashedPassword = hashPass(password);

    if (path) {
      const avatarUpload = await handleUpload(path);

      const newUser = await User.create({
        fullName,
        email,
        role,
        password: hashedPassword,
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
      password: hashedPassword,
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
    throw new Error(error);
  }
};

module.exports = createNewUser;
