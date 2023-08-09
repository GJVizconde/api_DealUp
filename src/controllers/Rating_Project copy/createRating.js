const { log } = require('console');
const { User, Project, Rating } = require('../../db');
const { Op } = require('sequelize');

const rateProject = async (req, res) => {
  try {
    const { points, comments, ProjectId, UserId } = req.body;

    const existingRating = await Rating.findOne({
      where: {
        UserId,
        ProjectId,
      },
    });

    if (existingRating) {
      return res.status(400).json({
        error: 'The user has already rate this project',
      });
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

    return res.status(201).json(newRating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = rateProject;
