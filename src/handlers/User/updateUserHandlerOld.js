const updateUser = require('../../controllers/User/updateUser');

const updateUserHandler = async (req, res) => {
  const { id } = req.params;
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
    const result = await updateUser(
      id,
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

    res.status(200).json({ message: 'Changes have been saved', result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateUserHandler;
