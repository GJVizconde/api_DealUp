const { User } = require('../../db');

const updateUser = async (
  id,
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
  thirdPartyCreated
) => {
  try {
    const updatedUser = await User.findByPk(id);

    if (!updatedUser) {
      throw new Error('User not found');
    }
    updatedUser.fullName = fullName;
    updatedUser.email = email;
    updatedUser.rol = rol;
    updatedUser.password = password;
    updatedUser.gender = gender;
    updatedUser.birthdate = birthdate;
    updatedUser.phone = phone;
    updatedUser.country = country;
    updatedUser.avatar = avatar;
    updatedUser.status = status;
    updatedUser.thirdPartyCreated = thirdPartyCreated;

    await updatedUser.save();

    return updatedUser;
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      throw new Error('Validation error: ' + error.message);
    }

    throw new Error('Failed to update user: ' + error.message);
  }
};

module.exports = updateUser;
