const { User } = require('../../db');

const createNewUser = async (
  name,
  email,
  rol,
  password,
  gender,
  birthdate,
  phone,
  country,
  avatar,
  status,
  thirdPartyCreated
) => {
  return await User.create({
    name,
    email,
    rol,
    password,
    gender,
    birthdate,
    phone,
    country,
    avatar,
    status,
    thirdPartyCreated,
  });
};

module.exports = createNewUser;
