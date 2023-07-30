const alreadyExistsUser = require('./alreadyExistsUser');

const validateCreateUser = async (req, res, next) => {
  const { fullName, email, rol, birthdate } = req.body;

  // console.log(typeof(fullName), typeof(email));

  try {
    const validateAlreadyRegistered = await alreadyExistsUser(email);

    if (validateAlreadyRegistered) {
      return res.status(400).json({ error: validateAlreadyRegistered.message });
    }

    if (!fullName) return res.status(400).json({ error: 'Missing name' });
    if (!email) return res.status(400).json({ error: 'Missing email' });
    if (!rol) return res.status(400).json({ error: 'Missing rol' });
    if (!birthdate) return res.status(400).json({ error: 'Missing birthdate' });

    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const validateUpdateUser = (req, res, next) => {
  const { id } = req.params;
  // const { fullName, email, rol, birthdate } = req.body;

  if (!id) return res.status(400).json({ error: 'Missing id' });
  // if (!fullName) return res.status(400).json({ error: 'Missing name' });
  // if (!email) return res.status(400).json({ error: 'Missing email' });
  // if (!rol) return res.status(400).json({ error: 'Missing rol' });
  // if (!birthdate) return res.status(400).json({ error: 'Missing birthdate' });

  next();
};

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!isNaN(id)) return res.status(400).json({ error: 'not a valid Id' });

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ error: 'Missing email' });
  if (!password) return res.status(400).json({ error: 'Missing password' });

  next();
};

module.exports = {
  validateCreateUser,
  validateUpdateUser,
  validateId,
  validateLogin,
};
