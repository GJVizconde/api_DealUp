const { Project, Rating } = require('../../db');

const updateRating = async (req, res) => {
    try {

      const { id } = req.params;
      // const { projectId } = req.params;
      const { points, comments } = req.body;
  
      // if (!points || !comments) {
      //   return res.status(400).json({ error: 'Faltan Datos' });
      // }

      // const project = await Project.findByPk(projectId, {
      //   include: Rating
      // });
  
      // if (!project) {
      //   return res.status(404).json({ error: 'El proyecto no fue encontrado' });
      // }

      const rating = await Rating.findByPk(id);
  
      if (!rating) {
        return res.status(404).json({ error: 'The rating was not found' });
      }

      rating.points = points;
      rating.comments = comments;
      await rating.save();
  
      res.json({ message: 'Updated rating correctly' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = updateRating;
  