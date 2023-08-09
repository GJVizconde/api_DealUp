const { Project, User, Gallery, Rating, Post, Comment, Investment } = require('../../db');

const { updateProjectDates } = require('../../helpers/asingCreateAtProject');

const getAllProjects = async () => {

     try {

       // await updateProjectDates();

    return dataBaseProjects = await Project.findAll({
  
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
            attributes:['id','points', 'comments'],
            include: [
                {
                  model: User,
                  attributes: ['id', 'fullName'],
                },
              ],   
        },       
        {
            model: Post,
            attributes:['id','description', 'image_gallery', 'video_gallery'],
               
            include: [
                {
                    model: Comment,
                    attributes:['id','comment'],
                    include: [
                        {
                          model: User,
                          attributes: ['id', 'fullName'],
                        },
                      ],
                }
            ]
        },
        {
            model: Investment,
            attributes: ['id','contribution','comment'],
            include: [
              {
                model: User,
                attributes: ['id','fullName'],
              //   through: {
              //     attributes: [],
              // }
              }
            ]
          }

    
    ],
        // attributes: {
        //     exclude: ['createdAt', 'updatedAt'],
        // },
    });
  
} catch (error) {
   
    throw error;
};
};

module.exports = { getAllProjects };
