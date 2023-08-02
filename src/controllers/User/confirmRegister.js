const { JWT_REGISTER: jwtRegister } = process.env;
const { verifyToken } = require('../../config/JWT');
const { User } = require('../../db');

const confirmRegister = async (token) => {
  const data = verifyToken(token, jwtRegister);

  console.log('data', data);

  try {
    if (!data) {
      throw new Error('Something was wrong, try again');
    }

    const updateUser = await User.findByPk(data.id);

    if (!updateUser) {
      throw new Error('Something was wrong, try again');
    }

    updateUser.confirmEmail = true;
    await updateUser.save();

    return {
      message: 'Confirm email was successful.',
      updateUser,
    };
  } catch (error) {
    throw new Error(
      'Error: Unable to confirm your registration. Please try again later'
    );
  }
};

module.exports = confirmRegister;
