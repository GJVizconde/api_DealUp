const { User } = require('../../db');

const getAllUsers = async () => {
  const dataBaseUsers = await User.findAll();

  return [...dataBaseUsers];
};

module.exports = getAllUsers;
