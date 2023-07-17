const { User } = require('../../db');
const axios = require('axios');
const { cleanArray } = require('../../helpers/index');

const getAllUsers = async () => {
  const dataBaseUsers = await User.findAll();

  const apiUsersRaw = (
    await axios.get(`https://jsonplaceholder.typicode.com/users`)
  ).data;

  const apiUsers = cleanArray(apiUsersRaw);

  return [...dataBaseUsers, ...apiUsers];
};

module.exports = getAllUsers;
