const { updateProject } = require('../../controllers/Projects/updateProject');
// const { updateUpload } = require('../../cloudinary/cloudinaryService');

const updateHandler = async (req, res) => {
  try {
    const { id } = req.params;
    // const { path } = req.file;
    const { path } = req.file || { path: undefined };
    const campoActualizar = req.body;
 

    const resultUpdateProject = await updateProject(id, campoActualizar, path);

    res.status(200).json(resultUpdateProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { updateHandler };
