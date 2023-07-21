const { Project, Rating, User } = require('../db');
const { Op } = require('sequelize');

const deleteRating = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { userId } = req.user;

    const project = await Project.findByPk(projectId, {
      include: {
        model: Rating,
        where: { userId }
      }
    });

    if (!project) {
      return res.status(404).json({ error: 'El proyecto no fue encontrado' });
    }

    const rating = project.ratings[0];

    if (!rating) {
      return res.status(404).json({ error: 'El rating no fue encontrado para este proyecto y usuario' });
    }

    await rating.destroy();

    res.json({ message: 'Rating del proyecto borrado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteRating;