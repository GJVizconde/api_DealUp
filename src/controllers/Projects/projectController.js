const { Project, User, Gallery, Rating, Post, Comment } = require('../../db');

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
        attributes: ['id', 'fullName', 'rol'],
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
        attributes: ['points', 'comments', 'UserId'],
      },
      {
        model: Post,
        attributes: ['description', 'image_gallery', 'video_gallery'],

        include: [
          {
            model: Comment,
            attributes: ['comment', 'UserId'],
          },
        ],
      },
    ],
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
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
        attributes: ['id', 'fullName', 'rol'],
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
        attributes: ['points', 'comments'],
        include: [
          {
            model: User,
            attributes: ['id', 'fullName'],
          },
        ],
      },
      {
        model: Post,
        attributes: ['description', 'image_gallery', 'video_gallery'],

        include: [
          {
            model: Comment,
            attributes: ['comment', 'UserId'],
            include: [
              {
                model: User,
                attributes: ['id', 'fullName'],
              },
            ],
          },
        ],
      },
    ],
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });

  if (project) {
    return project;
  } else {
    return `ID project not found, ID = ${id}`;
  }
};

module.exports = { searchProjectByName, searchProjectById };
