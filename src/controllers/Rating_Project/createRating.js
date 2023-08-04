const { User, Project, Rating } = require('../../db');

const calculatedAssingAverageRating = require('../../helpers/averageRating');

const rateProject = async (points, comments, ProjectId, UserId) => {
  try {
    const existingRating = await Rating.findOne({
      where: {
        UserId,
        ProjectId,
      },
    });

    if (existingRating) {
      throw new Error('The user has already created a rating for this project');
    }

    const rate = await Rating.create({
      points,
      comments,
      ProjectId,
      UserId,
    });

    const newRating = await Rating.findByPk(rate.dataValues.id, {
      attributes: { exclude: ['UserId'] },
      include: {
        model: User,
        attributes: ['id', 'fullName'],
      },
    });

    // console.log('newRating', newRating);
    await calculatedAssingAverageRating();

    return newRating;
  } catch (error) {
    throw new Error('Failed creating new Rating: ' + error.message);
  }
};

module.exports = rateProject;
