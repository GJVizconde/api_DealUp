const { Project } = require('../../db');

const updateProject = async (
  id,
  name,
  description,
  min_amount,
  max_amount,
  goal_amount,
  initial_date,
  deadline,
  gallery,
  category,
  status
) => {
  try {
    const updatedProjectById = await Project.findByPk(id);

    if (!updatedProjectById) {
      throw new Error('Project not found');
    }
    updatedProjectById.name = name;
    updatedProjectById.description = description;
    updatedProjectById.min_amount = min_amount;
    updatedProjectById.max_amount = max_amount;
    updatedProjectById.goal_amount = goal_amount;
    updatedProjectById.initial_date = initial_date;
    updatedProjectById.deadline = deadline;
    updatedProjectById.gallery = gallery;
    updatedProjectById.category = category;
    updatedProjectById.status = status;

    await updatedProjectById.save();
    return updatedProjectById;
  } catch (error) {}
};

module.exports = { updateProject };
