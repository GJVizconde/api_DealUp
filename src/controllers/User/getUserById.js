const { User, Project, Rating } = require('../../db');

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
    ],
  });

  return userFound;
};

module.exports = getUserById;