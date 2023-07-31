const { Rating } = require('../../db');

const updateRating = async (id, updateField) => {
  try {
    const updateRating = await Rating.findByPk(id);

    if (!updateRating) {
      throw new Error('Rating not found');
    }

    if (updateRating.points !== undefined) {
      updateRating.points = updateField.points;
    }
    if (updateRating.comments !== undefined) {
      updateRating.comments = updateField.comments;
    }

    console.log(updateRating);

    await updateRating.save();

    return updateRating;
  } catch (error) {
    throw new Error('UpdateRatingError: ' + error.message);
  }
};

module.exports = updateRating;
