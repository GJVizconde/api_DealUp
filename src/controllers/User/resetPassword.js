const { JWT_RECOVERY: jwtRecovery } = process.env;
const { verifyToken } = require('../../config/JWT');

const resetPassword = (token) => {
  try {
    if (!password) {
      throw new Error('Password is missing');
    }

    if (!token) {
      throw new Error('Something is wrong, try again');
    }

    //! Decodificar el token

    const verifyToken = verifyToken(token, jwtRecovery);
    console.log(verify);

    // Buscar Usuario

    // Actualizar Password
  } catch (error) {
    throw error;
  }
};

module.exports = resetPassword;
