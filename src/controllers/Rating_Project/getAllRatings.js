const { Rating } = require('../../db');

const getAllRatings = async () => {
  try {
    const ratingList = await Rating.findAll();

    if (!ratingList) {
      throw new Error('There is no ratings');
    }

    return [...ratingList];
  } catch (error) {
    throw new Error('Error: ' + error.message);
  }
};

module.exports = getAllRatings;
