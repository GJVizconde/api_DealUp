const { Project, Rating, User } = require('../../db');
// const { Op } = require('sequelize');

const deleteRating = async (req, res) => {
  try {
    // const { projectId } = req.params;
    const { id } = req.params;
    // const { userId } = req.user;

    // const project = await Project.findByPk(projectId, {
    //   include: {
    //     model: Rating,
    //     where: { userId }
    //   }
    // });

    // if (!project) {
    //   return res.status(404).json({ error: 'El proyecto no fue encontrado' });
    // }

    // const rating = project.ratings[0];

    const rating = await Rating.findByPk(id);


    if (!rating) {
      return res.status(404).json({ error: 'Rating not found' });
    }

    await rating.destroy();

    res.json({ message: 'Rating deleted correctly' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteRating;