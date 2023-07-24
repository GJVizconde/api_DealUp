const { User, Project } = require('../../db');

const getUserById = async (id) => {
  const userFound = await User.findByPk(id, {
    include: {
      model: Project,
      through: {
        attributes: [],
      },
    },
  });

  return userFound;
};

module.exports = getUserById;
