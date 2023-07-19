const { User } = require('../../db');
const { Op } = require('sequelize');

const searchUserByName = async (name) => {
  const foundUser = await User.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });

  return foundUser;
};

module.exports = searchUserByName;
