const { User, Rating } = require('../../db');

const getAllUsers = async () => {
  const dataBaseUsers = await User.findAll({
    include: {
      model: Rating,
    },
  });

  if (dataBaseUsers.length === 0) {
    return "There aren't any users, but Database is WORKING! 💯 ";
  }

  return [...dataBaseUsers];
};

module.exports = getAllUsers;
