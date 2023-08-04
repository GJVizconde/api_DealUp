const { User } = require('../../db');

const checkUser = async (email) => {
  try {
    if (!email) {
      throw new Error('Email missing');
    }

    const user = await User.findOne({ where: { email } });

    console.log('user', user);

    return user ? 'Email already registered' : 'Email available';
  } catch (error) {
    trow(error);
  }
};

module.exports = checkUser;
