const createNewUser = require("../../controllers/User/createNewUser");

const createUserHandler = async (req, res) => {
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
      thirdPartyCreated
    );

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createUserHandler;
