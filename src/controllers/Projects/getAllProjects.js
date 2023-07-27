
const { Project, User, Gallery, Rating, Post, Comment } = require('../../db');


const getAllProjects = async () => {

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

    

};

module.exports = { getAllProjects }