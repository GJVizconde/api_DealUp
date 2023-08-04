const jwt = require('jsonwebtoken');

const usedTokens = [];

const generateJWT = (user, secret, uniqueId) => {
  if (uniqueId) {
    const accessToken = jwt.sign(
      {
        id: user.id,
        role: user.role,
        uniqueId: uniqueId,
      },
      secret,
      {
        expiresIn: '2h',
      }
    );
    return accessToken;
  } else {
    const accessToken = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      secret,
      {
        expiresIn: '2h',
      }
    );
    return accessToken;
  }
};

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret, (err, decoded) => {
    if (err) throw new Error('Invalid Token');

    if (decoded.uniqueId) {
      if (usedTokens.includes(decoded.uniqueId)) {
        throw new Error('Token has already been used');
      }

      usedTokens.push(decoded.uniqueId);
    }

    return decoded;
  });
};

module.exports = { generateJWT, verifyToken };
