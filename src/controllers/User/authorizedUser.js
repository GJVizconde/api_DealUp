const { User } = require('../../db');
const verifyToken = require('../../helpers/verifyToken');

const authorizedUser = async (rol, token) => {
  try {
    // console.log('authorizedUser Este es el Rol', rol);

    const tokenData = verifyToken(token);

    console.log('authorizedUser Este es el Token', tokenData);

    const verifiedUser = await User.findByPk(tokenData.id);

    if (!verifiedUser && [].concat(roles).includes(tokenData.rol))
      throw new Error('Invalid User');

    return verifiedUser;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = authorizedUser;
