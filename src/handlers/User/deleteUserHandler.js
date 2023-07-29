const deleteUser = require('../../controllers/User/deleteUser');

const deleteUserHandler = async (req, res) => {
  const { id } = req.params;

  // console.log(id);

  try {
    const result = await deleteUser(id);
    res.status(200).json({ message: 'User was deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = deleteUserHandler;
