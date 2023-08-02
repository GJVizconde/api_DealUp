//  const getAllRatings = require('../controllers/Rating_Project/getAllRatings');

//   //obtengo el promedio de rating de todos los proyectos
//     const ratings = await getAllRatings();

//     //creo un obj para acceder a los promedios por projecId

//     const ratingsByProjectId = {};
//     ratings.forEach((rating) => {
//         const { ProjectId, averageRating } = rating;
//         ratingsByProjectId[ProjectId] = averageRating;
//     });

//     //asigno el promedio de ratings a cada project en el resultado
//     const projectsWithRatings = dataBaseProjects.map((project) => {
//        const  projectWithRating = project.toJSON();
//        const projectId = projectWithRating.id;
//        const averageRating = ratingsByProjectId[projectId];
//       projectWithRating.averageRating = averageRating || 0;
//       return projectWithRating;
// });
// return projectsWithRatings;