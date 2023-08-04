const { User, Rating } = require('../../db');

const getAllUsers = async () => {
  const dataBaseUsers = await User.findAll({
    include: {
      model: Rating,
    },
  });

  return [...dataBaseUsers];
};

module.exports = getAllUsers;
