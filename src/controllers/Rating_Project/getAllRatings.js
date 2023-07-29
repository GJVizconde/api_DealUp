const { Rating } = require('../../db');

const getAllRatings = async (req, res) => {
  try {

    const ratings = await Rating.findAll();


    if (!ratings) {
      return res.status(404).json({ error: 'Ratings not found' });
    }

    //calculo del promedio para cada proyecto

    const ratingsByProject = {};
    ratings.forEach((rating) => {
      
      const { ProjectId, points } = rating;
      if(!ratingsByProject[ProjectId]) {
        ratingsByProject[ProjectId] = { total: 0, count: 0};
      }

      ratingsByProject[ProjectId].total += points;
      ratingsByProject[ProjectId].count +=1;

    });

    //calculo el promedio y agrego a los resultados

    const projectWithRatings = [];
    for( const ProjectId in ratingsByProject) {
      const { total, count } = ratingsByProject[ProjectId];
      const averageRating = (total/count).toFixed(1);
      projectWithRatings.push({
        ProjectId,
        averageRating: parseFloat(averageRating),
      })
    }


    res.json({message: 'Ratings founded', ratings, message: 'Ratings average:', projectWithRatings});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllRatings;