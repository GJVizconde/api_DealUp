const { updateProject } = require('../../controllers/Projects/updateProject');

const updateHandler = async (req, res) => {

    try {
        const { id } = req.params;
        const campoActualizar = req.body;
       
;
        const resultUpdateProject = await updateProject(
          id,
          campoActualizar
        );
    
        res.status(200).json( resultUpdateProject );
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

module.exports = { updateHandler }