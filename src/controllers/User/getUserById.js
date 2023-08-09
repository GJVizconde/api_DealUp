const { User, Project, Rating, Investment } = require('../../db');

const getUserById = async (id) => {
  const userFound = await User.findByPk(id, {
    include: [
      {
        model: Project,
        through: {
          attributes: [],
        },
      },
      {
        model: Rating,
      },
      {
        model: Investment,
        attributes: ["id", "contribution", "comment", "status", "payment_time"],
        include: [
          {
            model: Project,
            attributes: ["id", "name"],
          },
        ],
      },
    ],
    paranoid: false
  });

  return userFound;
};

module.exports = getUserById;