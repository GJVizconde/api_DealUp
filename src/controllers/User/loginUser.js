const { generateJWT } = require('../../config/JWT');
const { JWT_SECRET: jwtSecret } = process.env;
const { User } = require('../../db');
const bcrypt = require('bcrypt');

const loginUser = async (email, password) => {
  const userRegistered = await User.findOne({
    where: { email },
  });

  if (!userRegistered) throw new Error('Email or password does not match!');

  // if (userRegistered.password !== password)
  //   throw new Error('Email or password does not match!');

  const isPasswordMatch = bcrypt.compareSync(password, userRegistered.password);

  if (!isPasswordMatch) {
    return { error: 'Email or password does not match!' };
  }

  const data = {
    data: userRegistered,
    accessToken: generateJWT(userRegistered, jwtSecret),
  };

  return data;
};

module.exports = loginUser;
