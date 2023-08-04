const { Rating } = require('../../db');
const deleteRating = async (id) => {
  try {
    ratingFound = await Rating.findByPk(id);

    if (!ratingFound) {
      throw new Error('Rating not found');
    }

    const deletedRating = await Rating.destroy({
      where: {
        id,
      },
    });

    return deletedRating;
  } catch (error) {
    throw new Error('Failed to delete rating: ' + error.message);
  }
};

module.exports = deleteRating;
