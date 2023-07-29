const getRatingById = require('../../controllers/Rating_Project/getRatingById');

const getRatingHandler = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const rating = await getRatingById(id);
    res.status(200).json({ rating });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getRatingHandler;
