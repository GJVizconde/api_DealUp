const updateRating = require('../../controllers/Rating_Project/updateRating');

const updateRatingHandler = async (req, res) => {
  const { id } = req.params;
  const updateField = req.body;

  try {
    const updated = await updateRating(id, updateField);
    res.status(200).json({ message: 'Changes have been saved', updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateRatingHandler;
