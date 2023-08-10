const { deleteProjectLogic } = require('../../controllers/Projects/deleteProjectLogic');

const deleteProjectLogicHandler = async (req, res) => {
  const { id } = req.params;


  try {

    await deleteProjectLogic(id);

    res.status(200).json({ message: 'Project was deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {deleteProjectLogicHandler};