
const { Project, User, Gallery, Rating, Post, Comment } = require('../../db');

const getAllRatings = require('../../controllers/Rating_Project/getAllRatings');

const getAllProjects = async () => {

     try {
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
  
 
} catch (error) {
   
    throw error;

};
};
module.exports = { getAllProjects }
