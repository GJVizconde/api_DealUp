const updateUser = require('../../controllers/User/updateUser');

const updateUserHandler = async (req, res) => {
  const { id } = req.params;
  const { path } = req.file;
  const updateField = req.body;
  try {
    const result = await updateUser(id, updateField, path);

    res.status(200).json({ message: 'Changes have been saved', result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateUserHandler;
