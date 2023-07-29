const { Rating } = require('../../db');

const getAllRatings = async () => {
  try {
    const ratingList = await Rating.findAll();

    if (!ratingList) {
      throw new Error('There is no ratings');
    }

    return [...ratingList];
  } catch (error) {
    throw new Error('Failed to delete user: ' + error.message);
  }
};

module.exports = getAllRatings;
