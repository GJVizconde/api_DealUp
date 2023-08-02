const {
  createProject,
} = require('../../controllers/Projects/postProjectController');

const { handleUpload } = require('../../services/cloudinaryService');
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });

const createProjectHandlerFile = async (req, res) => {
  const { path } = req.file;

  const {
    name,
    description,
    min_amount,
    max_amount,
    goal_amount,
    initial_date,
    deadline,
    city,
    category,
    status,
    UserId,
  } = req.body;

  console.log(path);

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
    } else if (!city) {
      return res.status(400).json('City is required');
    } else if (!category || category.length === 0) {
      return res.status(400).json('At least one category is required');
    } else if (!UserId) {
      return res.status(400).json('User id is required');
    }

    const image_cover = await handleUpload(path);

    const newProject = await createProject(
      name,
      description,
      min_amount,
      max_amount,
      goal_amount,
      initial_date,
      deadline,
      image_cover.secure_url,
      city,
      category,
      status,
      UserId
    );

    // fs.unlinkSync(file.path);

    return res
      .status(201)
      .json({ message: 'Proyect created successfully', newProject });
  } catch (error) {
    console.log('Error Handler');
    res.status(400).json({ error: error.message });
  }
};

module.exports = { upload, createProjectHandlerFile };
