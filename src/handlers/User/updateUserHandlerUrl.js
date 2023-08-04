const updateUser = require('../../controllers/User/updateUserUrl');

const updateUserHandlerUrl = async (req, res) => {
//   const { path } = req.file || { path: null };
  const { id } = req.params;
  const updateField = req.body;

//   console.log(path);
  try {
    const result = await updateUser(id, updateField);

    res.status(200).json({ message: 'User changes have been saved', result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateUserHandlerUrl;