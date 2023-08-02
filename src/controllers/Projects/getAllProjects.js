
const { Project, User, Gallery, Rating, Post, Comment } = require('../../db');

const getAllRatings = require('../../controllers/Rating_Project/getAllRatings');

const getAllProjects = async () => {

     try {
    return dataBaseProjects = await Project.findAll({
    //   const dataBaseProjects = await Project.findAll({ 
        include: [
            {
            model: User,
            attributes: ['id', 'fullName', 'role'],
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
                    include: [
                        {
                          model: User,
                          attributes: ['id', 'fullName'],
                        },
                      ],
                }
            ]
        }
    
    ],
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
       
    });
  
// const ratingsWithProjects = await getAllRatings();

// //combino info de rating con lista de proyecto
// const projectsWithRatings = dataBaseProjects.map((project) => {
//     //busco el rating prom para el project actual
//     const rating = ratingsWithProjects.projectWithRatings.find( (rating) => rating.ProjectId === project.id);

//     if(rating) {
//         project.dataValues.averageRating = rating.averageRating;
//     } else {
//         project.dataValues.averageRating = 0;
//     }
   
//     return project;
// })

// return projectsWithRatings;
} catch (error) {
   
    throw error;
};
};

module.exports = { getAllProjects };
