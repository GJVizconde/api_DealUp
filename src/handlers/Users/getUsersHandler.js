const searchUserByName = require('../../controllers/Users/searchUserByName');
const getAllUsers = require('../../controllers/Users/getAllUsers');

const getUsersHandler = async (req, res) => {
  const { name } = req.query;

  console.log(name);

  try {
    const results = name ? await searchUserByName(name) : await getAllUsers();

    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getUsersHandler;
