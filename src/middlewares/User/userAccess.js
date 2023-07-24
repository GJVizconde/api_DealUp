const authorizedUser = require('../../controllers/User/authorizedUser');

const userAccess = (rol) => async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop();

    const userOk = await authorizedUser(rol, token);

    if (userOk) {
      next();
    }

    if (userOk.error) {
      return res.status(400).json({ error: userOk.error });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = userAccess;
