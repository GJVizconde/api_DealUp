const sendEmailRecovery = require('../../controllers/User/sendEmailRecovery');

const sendEmailRecoveryHandler = async (req, res) => {
  const { email } = req.body;

  try {
    const result = await sendEmailRecovery(email);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = sendEmailRecoveryHandler;
