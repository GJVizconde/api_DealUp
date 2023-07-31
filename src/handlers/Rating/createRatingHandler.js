const createNewRating = require('../../controllers/Rating_Project/createRating');

const createRatingHandler = async (req, res) => {
  const { points, comments, ProjectId, UserId } = req.body;

  try {
    const newRating = await createNewRating(
      points,
      comments,
      ProjectId,
      UserId
    );

    res.status(201).json(newRating);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = createRatingHandler;
