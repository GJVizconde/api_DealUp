const { Rating } = require('../../db');

const getAllRatings = async (req, res) => {
  try {

    const ratings = await Rating.findAll();


    if (!ratings) {
      return res.status(404).json({ error: 'Ratings not found' });
    }

    res.json({message: 'Ratings founded', ratings});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllRatings;