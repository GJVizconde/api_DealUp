const { log } = require('console');
const { User, Project, Rating } = require('../../db');
const { Op } = require('sequelize');

const rateProject = async(req, res) => {
    try {

      const { points, comments, ProjectId, UserId } = req.body;
     
 const existingRating = await Rating.findOne({
  where: {
    UserId,
    ProjectId,
  },
});

if (existingRating) {
 
  return res.status(400).json({ error: 'The user has already created a rating for this project' });
}


const rate = await Rating.create({
  points,
  comments,
  ProjectId,
  UserId,
});

      return res.status(201).json(rate);
      }

      catch (error) { res.status(500).json({error: error.message});
      }
}

module.exports = rateProject;

