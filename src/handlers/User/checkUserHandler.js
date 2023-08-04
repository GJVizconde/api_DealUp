const checkUser = require('../../controllers/User/checkUser');

const checkUserHandler = async (req, res) => {
  const { email } = req.body;

  try {
    emailStatus = await checkUser(email);
    res.status(200).json({ emailStatus });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = checkUserHandler;
