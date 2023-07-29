const deleteRating = require('../../controllers/Rating_Project/deleteRating');

const deleteRatingHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteRating(id);

    res.status(200).json({ message: 'User was deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = deleteRatingHandler;
