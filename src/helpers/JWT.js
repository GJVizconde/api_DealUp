const jwt = require('jsonwebtoken');

const generateJWT = (user) => {
  const accessToken = jwt.sign(
    {
      id: user.id,
      rol: user.rol,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '2h',
    }
  );

  return accessToken;
};

module.exports = { generateJWT };
