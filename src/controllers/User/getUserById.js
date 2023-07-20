const { User } = require('../../db');

const getUserById = async (id) => {
  const userFound = await User.findByPk(id);

  return userFound;
};

module.exports = getUserById;
