const { Project, User, Gallery, Rating, Post, Comment, Investment } = require('../../db');

const { Op } = require('sequelize');

//NAME
const searchProjectByName = async (name) => {
  const projectByName = await Project.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },

    include: [
      {
        model: User,
        attributes: ['id', 'fullName', 'role'],
        through: {
          attributes: [],
        },
      },
      {
        model: Gallery,
        attributes: ['image', 'comments'],
      },
      {
        model: Rating,
        attributes: ['id','points', 'comments'],
        include: [
          {
            model: User,
            attributes: ['id', 'fullName', 'role'],
          },
        ],
      },
      {
        model: Post,
        attributes: ['id','description', 'image_gallery', 'video_gallery'],

        include: [
          {
            model: Comment,
            attributes: ['id','comment'],
            include: [
              {
                model: User,
                attributes: ['id', 'fullName', 'role'],
              },
            ],
          },
        ],
      },
      {
        model: Investment,
        attributes: ['id','contribution','comment', "status", "payment_time"],
        include: [
          {
            model: User,
            attributes: ['id','fullName', 'role'],
          }
        ]
      }
    ],
   
  });

  if (projectByName) {
    return projectByName;
  } else {
    return `the ${name} project does not exist`;
  }
};

//ID

const searchProjectById = async (id) => {
  const project = await Project.findByPk(id, {
    include: [
      {
        model: User,
        attributes: ['id', 'fullName', 'role'],
        through: {
          attributes: [],
        },
      },
      {
        model: Gallery,
        attributes: ['image', 'comments'],
      },
      {
        model: Rating,
        attributes: ['id','points', 'comments'],
        include: [
          {
            model: User,
            attributes: ['id', 'fullName', "role"],
          },
        ],
      },
      {
        model: Post,
        attributes: ['id','description', 'image_gallery', 'video_gallery'],

        include: [
          {
            model: Comment,
            attributes: ['id','comment'],
            include: [
              {
                model: User,
                attributes: ['id', 'fullName', "role"],
              },
            ],
          },
        ],
      },
      {
        model: Investment,
        attributes: ['id','contribution','comment', "status", "payment_time"],
        include: [
          {
            model: User,
            attributes: ['id','fullName', "role"],
          }
        ]
      }
    ],
  });

  if (project) {
    return project;
  } else {
    return `ID project not found, ID = ${id}`;
  } 
};

module.exports = { searchProjectByName, searchProjectById };
