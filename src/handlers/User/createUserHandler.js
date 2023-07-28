const createNewUser = require("../../controllers/User/createNewUser");
const { handleUpload } = require("../../cloudinary/cloudinaryService");
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const createUserHandler = async (req, res) => {
  if (req.file) {
    const { path } = req.file;
    console.log(path);
  }

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

  console.log(fullName, email, rol);

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
      const image = await handleUpload(path);

      const newUser = await createNewUser(
        fullName,
        email,
        rol,
        password,
        gender,
        birthdate,
        phone,
        country,
        image.secure_url,
        status,
        thirdPartyCreated
      );

      // fs.unlinkSync(file.path);

      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { upload, createUserHandler };
