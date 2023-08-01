const { Rating } = require('../../db');

const getAllRatings = async () => {
  try {
    const ratingList = await Rating.findAll();

    if (!ratingList) {
      throw new Error('There is no ratings');
    }

    // return [...ratingList];
    // CODIGO PARA RATING PROMED
    //calculo del promedio para cada proyecto

    const ratingsByProject = {};
    ratingList.forEach((rating) => {
      
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


    return ({message: 'Ratings founded', ratingList, projectWithRatings});
  } catch (error) {
    throw new Error('Error: ' + error.message);
  }
};

module.exports = getAllRatings;
