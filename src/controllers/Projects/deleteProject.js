const { Project } = require('../../db');

const deleteProject = async (id) => {
  try {
    const projectFound = await Project.findByPk(id);

    if (!projectFound) {
      throw new Error('Project not found');
    }

    const deletedProject = await Project.destroy({
      where: {
        id
      }
    });

    return deletedProject;
  } catch (error) {
    throw new Error('Failed to delete project: ' + error.message);
  }
};

module.exports = { deleteProject };