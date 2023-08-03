const resetPassword = require('../../controllers/User/resetPassword');

const resetPasswordHandler = async (req, res) => {
  try {
    const { token, password } = req.body;

    const result = await resetPassword(token, password);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = resetPasswordHandler;
