const confirmRegister = require('../../controllers/User/confirmRegister');

const confirmRegisterHandler = async (req, res) => {
  try {
    const { token } = req.params;

    const result = await confirmRegister(token);
    res.status(201).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = confirmRegisterHandler;
