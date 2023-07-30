
const { Project, User, Gallery, Rating, Post, Comment } = require('../../db');
//const sequelize = require('sequelize');
const getAllRatings = require('../../controllers/Rating_Project/getAllRatings');

const getAllProjects = async () => {

    // try {
    return dataBaseProjects = await Project.findAll({
       
        include: [
            {
            model: User,
            attributes: ['id', 'fullName', 'rol'],
            through: {
                attributes: [],
            }
        },
        {
            model: Gallery,
            attributes: ['image', 'comments'],
        },
        {
            model: Rating,
            attributes:['points', 'comments', 'UserId'],
        
        },
        
        {
            model: Post,
            attributes:['description', 'image_gallery', 'video_gallery'],
               
            include: [
                {
                    model: Comment,
                    attributes:['comment', 'UserId'],
                }
            ]
        }
    
    ],
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
       
    });

//     //obtengo el promedio de rating de todos los proyectos
//     const ratings = await getAllRatings(null,res);

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
//     });
//     return projectsWithRatings;
// } catch (error) {
//     // Manejo de errores
//     throw error;
//   }



};

module.exports = { getAllProjects }




// {
        //     model: Rating,
        //     attributes: [['points', 'ratingPoints'], 'comments', 'UserId'],
           
        //     include: [
        //       {
        //         model: sequelize.literal('(SELECT AVG(`points`) FROM `Ratings` WHERE `Project`.`id` = `Ratings`.`projectId`)'),
        //         as: 'averageRating',
        //       },
        //     ],
        //   },