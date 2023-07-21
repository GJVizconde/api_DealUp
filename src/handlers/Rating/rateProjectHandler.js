const rateProject = require('../../controllers/Rating_Project/rateProject');
const { User, Project, Rating } = require('../db');
const { Op } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const rateProject = async(req, res) => {
    try {

      const { projectId } = req.params;
      const { points, comments  } = req.body;
      const { userId } = req.user;

      if(!points || !comments) return res.status(404).send('Faltan Datos');

      const rate = await Rating.create({
        id: uuidv4(), points, comments
      })

      if (projectId) {
        const foundProject = await Project.findAll({ where: { id: {[Op.iLike]: `%${projectId}%`} } });
        await rate.addProject(foundProject);
      }

      if (userId) {
      const foundUser = await User.findAll({ where: { id: {[Op.iLike]: `%${userId}%`} } });
      await rate.addUser(foundUser);
      }

      return rate;

      }

      catch (error) {

        res.status(500).json({error: error.message});
      }
}

module.exports = rateProject;