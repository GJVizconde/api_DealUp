const { User } = require('../../db');
const { handleUpload } = require('../../services/cloudinaryService');

const updateUser = async (id, updateField, path) => {
  try {
    const updateUser = await User.findByPk(id);

    if (!updateUser) {
      throw new Error('User not found');
    }

    if (updateField.fullName !== undefined) {
      updateUser.fullName = updateField.fullName;
    }
    if (updateField.email !== undefined) {
      updateUser.email = updateField.email;
    }
    if (updateField.role !== undefined) {
      updateUser.role = updateField.role;
    }
    if (updateField.password !== undefined) {
      updateUser.password = updateField.password;
    }
    if (updateField.dni !== undefined) {
      updateUser.dni = updateField.dni;
    }
    if (updateField.gender !== undefined) {
      updateUser.gender = updateField.gender;
    }
    if (updateField.birthdate !== undefined) {
      updateUser.birthdate = updateField.birthdate;
    }
    if (updateField.phone !== undefined) {
      updateUser.phone = updateField.phone;
    }
    if (updateField.country !== undefined) {
      updateUser.country = updateField.country;
    }

    if (updateField.status !== undefined) {
      updateUser.status = updateField.status;
    }
    if (updateField.confirmEmail !== undefined) {
      updateUser.confirmEmail = updateField.confirmEmail;
    }
    if (updateField.thirdPartyCreated !== undefined) {
      updateUser.thirdPartyCreated = updateField.thirdPartyCreated;
    }
    if (updateField.avatar !== undefined) {
      updateUser.avatar = updateField.avatar;
    }

    if (path) {
      const uploadedAvatar = await handleUpload(path);
      updateUser.avatar = uploadedAvatar.secure_url;
    }

    await updateUser.save();

    return updateUser;
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      throw new Error('Validation error: ' + error.message);
    }

    throw new Error('Failed to update user: ' + error.message);
  }
};

module.exports = updateUser;
