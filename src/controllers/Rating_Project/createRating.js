const { log } = require('console');
const { User, Project, Rating } = require('../../db');
const { Op } = require('sequelize');

const rateProject = async(req, res) => {
    try {

      // const { projectId } = req.params;
      const { points, comments  } = req.body;
      // const { userId } = req.user;

      console.log(points, comments);

      // if(!points || !comments) return res.status(404).send('Faltan Datos');

      const rate = await Rating.create({
        points, comments
      })

      // if (projectId) {
      //   const foundProject = await Project.findAll({ where: { id: {[Op.iLike]: `%${projectId}%`} } });
      //   await rate.addProject(foundProject);
      // }

      // if (userId) {
      // const foundUser = await User.findAll({ where: { id: {[Op.iLike]: `%${userId}%`} } });
      // await rate.addUser(foundUser);
      // }

      return res.status(201).json(rate);
      }

      catch (error) {

        res.status(500).json({error: error.message});
      }
}

module.exports = rateProject;