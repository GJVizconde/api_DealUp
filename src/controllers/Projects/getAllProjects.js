const {
  Project,
  User,
  Gallery,
  Rating,
  Post,
  Comment,
  Investment,
} = require('../../db');

const getAllProjects = async () => {
  try {
    return (dataBaseProjects = await Project.findAll({
      paranoid: false,
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
          attributes: ['id', 'points', 'comments'],
          include: [
            {
              model: User,
              attributes: ['id', 'fullName', 'role'],
            },
          ],
        },
        {
          model: Post,
          attributes: ['id', 'description', 'image_gallery', 'video_gallery'],

          include: [
            {
              model: Comment,
              attributes: ['id', 'comment'],
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
          attributes: [
            'id',
            'contribution',
            'comment',
            'status',
            'payment_time',
          ],
          include: [
            {
              model: User,
              attributes: ['id', 'fullName', 'role'],
            },
          ],
        },
      ],
    }));
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllProjects };
