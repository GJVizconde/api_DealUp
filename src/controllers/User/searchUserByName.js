const { User } = require('../../db');
const { Op } = require('sequelize');

const searchUserByName = async (fullName) => {
  const foundUser = await User.findAll({
    where: {
      fullName: {
        [Op.iLike]: `%${fullName}%`,
      },
    },
  });

  return foundUser;
};

module.exports = searchUserByName;
