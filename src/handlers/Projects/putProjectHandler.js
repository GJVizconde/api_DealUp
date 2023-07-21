const {
  updateProject,
} = require('../../controllers/Projects/putProjectController');

const updateProjectHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      min_amount,
      max_amount,
      goal_amount,
      initial_date,
      deadline,
      gallery,
      category,
      status,
    } = req.body;

    const resultUpdateProject = await updateProject(
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
    );

    res.status(200).json({ resultUpdateProject });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { updateProjectHandler };
