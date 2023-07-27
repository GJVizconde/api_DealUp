const {
  createProject,
} = require('../../controllers/Projects/postProjectController');

const createProjectHandler = async (req, res) => {
  const {
    name,
    description,
    min_amount,
    max_amount,
    goal_amount,
    initial_date,
    deadline,
    image_cover,
    category,
    status,
    userId,
  } = req.body;

  
  try {
    if (!name) {
      return res.status(400).json('Name is required');
    } else if (!description) {
      return res.status(400).json('Description is required');
    } else if (!min_amount) {
      return res.status(400).json('Minimum amount is required');
    } else if (!max_amount) {
      return res.status(400).json('Maximum amount is required');
    } else if (!goal_amount) {
      return res.status(400).json('Goal amount is required');
    } else if (!initial_date) {
      return res.status(400).json('Initial date is required');
    } else if (!deadline) {
      return res.status(400).json('Deadline is required');
     } else if(!category || category.length === 0 ) { return res.status(400).json('At least one category is required')
    } else if (!userId) {
      return res.status(400).json('User_id is required');
     }

    const newProject = await createProject(
      name,
      description,
      min_amount,
      max_amount,
      goal_amount,
      initial_date,
      deadline,
      image_cover,
      category,
      status,
      userId
    );

    return res
      .status(201)
      .json({ message: 'Proyect created successfully', newProject });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createProjectHandler };
