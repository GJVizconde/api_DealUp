const { deleteProject } = require('../../controllers/Projects/deleteProject');

const deleteProjectHandler = async (req, res) => {
  const { id } = req.params;


  try {
    const result = await deleteProject(id);
    res.status(200).json({ message: 'Project was deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {deleteProjectHandler};