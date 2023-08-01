const { User } = require('../../db');
const { generateJWT } = require('../../config/JWT');

const { JWT_SECRET: jwtSecret } = process.env;

const loginUser = async (email, password) => {
  const userRegistered = await User.findOne({
    where: { email },
  });

  if (!userRegistered) throw new Error('Email or password does not match!');

  if (userRegistered.password !== password)
    throw new Error('Email or password does not match!');

  const data = {
    data: userRegistered,
    accessToken: generateJWT(userRegistered, jwtSecret),
  };

  return data;
};

module.exports = loginUser;
