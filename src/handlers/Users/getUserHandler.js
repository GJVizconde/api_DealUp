const getUserById = require('../../controllers/Users/getUserById');

const getUserHandler = async (req, res) => {
  const { id } = req.params;

  console.log(id);

  try {
    const foundUser = await getUserById(id);

    res.status(200).json(foundUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getUserHandler;
