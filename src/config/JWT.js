const jwt = require('jsonwebtoken');

const generateJWT = (user, secret) => {
  const accessToken = jwt.sign(
    {
      id: user.id,
      rol: user.rol,
    },
    secret,
    {
      expiresIn: '2h',
    }
  );

  return accessToken;
};

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret, (err, decoded) => {
    if (err) throw new Error('Invalid Token');

    return decoded;
  });
};

module.exports = { generateJWT, verifyToken };
