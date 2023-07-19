const updateUser = require('../../controllers/Users/updateUser');

const updateUserHandler = async (req, res) => {
  const { id } = req.params;
  const {
    name,
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
    const result = await updateUser(
      id,
      name,
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

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateUserHandler;
