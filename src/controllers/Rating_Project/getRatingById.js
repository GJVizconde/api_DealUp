const { Rating } = require('../../db');

const getRatingById = async (id) => {
  try {
    const rating = await Rating.findByPk(id);

    if (!rating) {
      throw new Error({ error: 'There is no rating with that id' });
    }

    return rating;
  } catch (error) {
    throw new Error('Error: ' + error.message);
  }
};

module.exports = getRatingById;
