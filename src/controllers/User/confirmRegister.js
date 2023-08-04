const { JWT_REGISTER: jwtRegister } = process.env;
const { verifyToken } = require('../../config/JWT');
const { User } = require('../../db');

const confirmRegister = async (token) => {
  const data = verifyToken(token, jwtRegister);

  try {
    if (!data) {
      throw new Error('Something was wrong, try again');
    }

    const updateUser = await User.findByPk(data.id);

    if (!updateUser) {
      throw new Error('Something was wrong, try again');
    }
    if (updateUser.confirmEmail === true) {
      throw new Error('User already registered');
    }

    updateUser.confirmEmail = true;
    await updateUser.save();

    return 'Welcome to DealUp!, email confirmed';
  } catch (error) {
    throw error;
  }
};

module.exports = confirmRegister;
