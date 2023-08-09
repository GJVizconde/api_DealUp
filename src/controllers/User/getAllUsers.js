const { User, Rating, Project, Investment } = require('../../db');

const getAllUsers = async () => {
  const dataBaseUsers = await User.findAll({
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
  ], paranoid: false});

  if (dataBaseUsers.length === 0) {
    return "There aren't any users, but Database is WORKING! 💯 ";
  }

  return [...dataBaseUsers];
};

module.exports = getAllUsers;
