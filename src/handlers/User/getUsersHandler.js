const searchUserByName = require('../../controllers/User/searchUserByName');
const getAllUsers = require('../../controllers/User/getAllUsers');

const getUsersHandler = async (req, res) => {
  const { fullName } = req.query;

  // console.log(name);

  try {
    const results = fullName
      ? await searchUserByName(fullName)
      : await getAllUsers();

    res.status(200).json(results);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = getUsersHandler;
