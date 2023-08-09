const { JWT_RECOVERY: jwtRecovery } = process.env;
const { verifyToken } = require('../../config/JWT');
const { User } = require('../../db');

const resetPassword = async (token, password) => {
  try {
    if (!password) {
      throw new Error('Password is missing');
    }

    if (!token) {
      throw new Error('Something is wrong, try again');
    }

    console.log('token', token);
    console.log('password', password);

    //! Decodificar el token

    const validToken = verifyToken(token, jwtRecovery);
    console.log('validToken', validToken);

    // Buscar Usuario

    const user = await User.findByPk(validToken.id);

    if (!user) {
      throw new Error('User not found');
    }

    // Actualizar Password

    user.password = password;

    await user.save();

    console.log(user);

    return 'Your password has been successfully changed!';
  } catch (error) {
    throw error;
  }
};

module.exports = resetPassword;
