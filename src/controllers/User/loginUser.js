const { User } = require('../../db');
const { generateJWT } = require('../../helpers/JWT');

const loginUser = async (email, password) => {
  const userRegistered = await User.findOne({
    where: { email },
  });

  if (!userRegistered) throw new Error('Email or password does not match!');

  if (userRegistered.password !== password)
    throw new Error('Email or password does not match!');

  return generateJWT(userRegistered);
};

module.exports = loginUser;
