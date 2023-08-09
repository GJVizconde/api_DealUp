const { User,Project, Rating, Investment } = require('../../db');
const { Op } = require('sequelize');

const searchUserByName = async (fullName) => {
  const foundUser = await User.findAll({
    where: {
      fullName: {
        [Op.iLike]: `%${fullName}%`,
      },
    },
    include: [
      {
        model: Project,
        through: {
          attributes: [],
        },
      },
      {
        model: Rating,
        attributes: ['id','points', 'comments'],
        include: [
          {
            model: Project,
            attributes: ['id', 'name'],
          },
        ],
      },
      {
        model: Investment,
        attributes: ['id','contribution','comment', "status", "payment_time"],
        include: [
          {
            model: Project,
            attributes: ['id','name'],
          }
        ]
      }
    ]
  });

  return foundUser;
};

module.exports = searchUserByName;
