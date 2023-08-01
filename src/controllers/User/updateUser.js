const { User } = require('../../db');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dgx2v3fnk',
  api_key: '852753386513374',
  api_secret: 'APa-UKXfdLf-WK5K0WBbMHZsJtU',
});

const updateUser = async (id, updateField, path) => {
  try {
    const updateUser = await User.findByPk(id);

    const public = updateUser.avatar.split('/').pop();
    const publicId = public.replace('.jpg', '');
    console.log('public_id:', publicId);

    if (!updateUser) {
      throw new Error('User not found');
    }

    if (updateField.name !== undefined) {
      updateUser.name = updateField.name;
    }
    if (updateField.email !== undefined) {
      updateUser.email = updateField.email;
    }
    if (updateField.rol !== undefined) {
      updateUser.rol = updateField.rol;
    }
    if (updateField.password !== undefined) {
      updateUser.password = updateField.password;
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
    if (updateField.avatar !== undefined) {
      updateUser.avatar = updateField.avatar;
    }
    if(path !== undefined){

      const newImage = await cloudinary.uploader.upload(path, {
      public_id: publicId,
      overwrite: true
      });
      updateUser.avatar = newImage.secure_url
    }
    if (updateField.status !== undefined) {
      updateUser.status = updateField.status;
    }
    if (updateField.thirdPartyCreated !== undefined) {
      updateUser.thirdPartyCreated = updateField.thirdPartyCreated;
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
