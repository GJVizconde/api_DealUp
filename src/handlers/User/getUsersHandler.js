const searchUserByName = require('../../controllers/User/searchUserByName');
const getAllUsers = require('../../controllers/User/getAllUsers');

const getUsersHandler = async (req, res) => {
  const { name } = req.query;

  // console.log(name);

  try {
    const results = name ? await searchUserByName(name) : await getAllUsers();

    res.status(200).json(results);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = getUsersHandler;
