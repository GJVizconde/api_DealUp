const { Rating, Project } = require('../db');

const calculatedAssingAverageRating = async () => {
     try {
      const ratingList = await Rating.findAll();   
      
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
  
      //calculo el promedio y actualizacion de los proyectos
  
      for( const ProjectId in ratingsByProject) {
        const { total, count } = ratingsByProject[ProjectId];
        const averageRating =  parseFloat((total/count).toFixed(1));
        
        //Busca el project por su ID y actualiza el atributo average_rating

        const projectToUpdate = await Project.findByPk(ProjectId);
        if(projectToUpdate) {
            projectToUpdate.average_rating = averageRating;
            await projectToUpdate.save();
        }  
      }
     
      return ({message: 'Average ratings calculated and assigned'});
    } catch (error) {
      throw new Error('Error: ' + error.message);
    }
  };
  
  module.exports = calculatedAssingAverageRating;