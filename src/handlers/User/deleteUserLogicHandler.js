const deleteUserLogic = require('../../controllers/User/deleteUserLogic');

const deleteUserLogicHandler = async (req, res) => {
  const { id } = req.params;

  // console.log(id);

  try {
    const result = await deleteUserLogic(id);
    res.status(200).json({ message: 'User was deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = deleteUserLogicHandler;