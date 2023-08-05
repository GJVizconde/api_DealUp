const createNewUser = require('../../controllers/User/createNewUser');
const multer = require('multer');
const upload = multer({ dest: 'src/uploads/' });

const createUserHandler = async (req, res) => {
  const { path } = req.file || { path: null };
  const {
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
  } = req.body;

  try {
    const newUser = await createNewUser(
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
      path
    );

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createUserHandler, upload };
