const createNewUser = require('../../controllers/User/createNewUser');
const multer = require('multer');
const upload = multer({ dest: 'src/uploads/' });

const createUserHandler = async (req, res) => {
  const { path } = req.file || { path: null };
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

  console.log('Handler', fullName);

  try {
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
      thirdPartyCreated,
      path
    );

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createUserHandler, upload };
