const { Rating } = require('../../db');

const getAllRatings = async () => {

    const ratingList = await Rating.findAll();

    if (!ratingList) {
      throw new Error('There is no ratings');
    }

    return [...ratingList]; 
 
};

module.exports = getAllRatings;
