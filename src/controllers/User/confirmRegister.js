const { verifyToken } = require('../../config/JWT');
const { JWT_REGISTER: jwtRegister } = process.env;
const updateUser = require('../../controllers/User/updateUser');

const confirmRegister = async (token) => {
  const data = verifyToken(token, jwtRegister);

  console.log('data', data);

  try {
    if (!data) {
      throw new Error('An error occurred, try again');
    }

    updateUser(data.id, data.role);
    console.log('updateUser');
  } catch (error) {
    throw new Error(
      'Error: Unable to confirm your registration. Please try again later'
    );
  }
};

module.exports = confirmRegister;
