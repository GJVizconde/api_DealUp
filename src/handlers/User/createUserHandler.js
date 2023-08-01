const createNewUser = require('../../controllers/User/createNewUser');
const { handleUpload } = require('../../cloudinary/cloudinaryService');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'src/uploads/' });

const createUserHandler = async (req, res) => {
  const { path } = req.file;
  const {
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
  } = req.body;

  // console.log(fullName, email, rol);

  try {
    if (req.file) {
      // console.log(path);

      const uploadedAvatar = await handleUpload(path);

      const newUser = await createNewUser(
        fullName,
        email,
        rol,
        password,
        gender,
        birthdate,
        phone,
        country,
        uploadedAvatar.secure_url,
        status,
        thirdPartyCreated
      );

      return res.status(201).json(newUser);
    }

    const newUser = await createNewUser(
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
    );

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createUserHandler, upload };
