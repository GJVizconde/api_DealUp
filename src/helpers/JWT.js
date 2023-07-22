const jwt = require('jsonwebtoken');

const generateJWT = (user) => {
  const jwtToken = jwt.sign(
    {
      id: user.id,
      rol: user.rol,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '2h',
    }
  );

  return jwtToken;
};

module.exports = { generateJWT };
