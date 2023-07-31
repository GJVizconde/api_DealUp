const getAllRatings = require('../../controllers/Rating_Project/getAllRatings');

const getRatingsHandler = async (req, res) => {
  try {
    const results = await getAllRatings();
    res.status(200).json(results);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = getRatingsHandler;
