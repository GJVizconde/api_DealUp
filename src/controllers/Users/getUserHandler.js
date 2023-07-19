const getUserHandler = async (req, res) => {
  try {
    res.status(200).send('NIY: SE MOSTRARAN USUARIOS POR ID');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getUserHandler;
