const createNewRegister = require('../../controllers/User/createNewRegister');

const createRegisterHandler = async (req, res) => {
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
    const registered = await createNewRegister(
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
      thirdPartyCreated
    );

    res.status(201).json(registered);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createRegisterHandler;
