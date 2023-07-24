const loginUser = require('../../controllers/User/loginUser');

const loginUserHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRegistered = await loginUser(email, password);

    res.status(200).json({ message: 'Welcome Back!', userRegistered });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = loginUserHandler;
