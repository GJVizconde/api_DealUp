const { Project, Rating } = require('../db');

const updateRating = async (req, res) => {
    try {
      const { projectId } = req.params;
      const { points, comments } = req.body;
  
      if (!points || !comments) {
        return res.status(400).json({ error: 'Faltan Datos' });
      }

      const project = await Project.findByPk(projectId, {
        include: Rating
      });
  
      if (!project) {
        return res.status(404).json({ error: 'El proyecto no fue encontrado' });
      }

      const rating = project.Rating;
  
      if (!rating) {
        return res.status(404).json({ error: 'El rating no fue encontrado' });
      }

      rating.points = points;
      rating.comments = comments;
      await rating.save();
  
      res.json({ message: 'Rating actualizado correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = updateRating;
  