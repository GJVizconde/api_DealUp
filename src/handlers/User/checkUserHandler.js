const checkUser = require('../../controllers/User/checkUser');

const checkUserHandler = async (req, res) => {
  const { email } = req.body;

  try {
    result = await checkUser(email);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = checkUserHandler;
