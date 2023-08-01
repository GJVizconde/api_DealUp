const createNewUser = require("../../controllers/User/createNewUser");
const { handleUpload } = require("../../cloudinary/cloudinaryService");
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

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
    status,
    thirdPartyCreated,
  } = req.body;

  try {
    if (!req.file) {
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
    } else {
      const avatar = await handleUpload(path);

      const newUser = await createNewUser(
        fullName,
        email,
        rol,
        password,
        gender,
        birthdate,
        phone,
        country,
        avatar.secure_url,
        status,
        thirdPartyCreated
      );

      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { upload, createUserHandler };
