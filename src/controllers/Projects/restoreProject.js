const { Project } = require('../../db');

const restoreProject = async (req, res) => {
  try {

    const { id } = req.params;

    const project = await Project.findByPk(id, {paranoid: false});

    console.log(project);

    if (!project) {
      throw new Error('User not found');
    }

    project.dataValues.deletedAt = null;
    await project.save();

    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
    throw new Error('Failed to restore project: ' + error.message);
  }
};

module.exports = { restoreProject };