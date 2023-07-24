const { User } = require('../../db');

const alreadyExistsUser = async (email) => {
  try {
    const alreadyExistEmail = await User.findOne({ where: { email } });

    if (alreadyExistEmail) return { message: 'Email already registered' };
  } catch (error) {
    console.log(error);
  }
};

module.exports = alreadyExistsUser;
