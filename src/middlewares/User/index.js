const validateCreateUser = (req, res, next) => {
  const { name, email, rol, birthdate } = req.body;
  if (!name) return res.status(400).json({ error: 'Missing name' });
  if (!email) return res.status(400).json({ error: 'Missing email' });
  if (!rol) return res.status(400).json({ error: 'Missing rol' });
  if (!birthdate) return res.status(400).json({ error: 'Missing birthdate' });

  next();
};

const validateUpdateUser = (req, res, next) => {
  const { id } = req.params;
  const { name, email, rol, birthdate } = req.body;
  if (!id) return res.status(400).json({ error: 'Missing id' });
  if (!name) return res.status(400).json({ error: 'Missing name' });
  if (!email) return res.status(400).json({ error: 'Missing email' });
  if (!rol) return res.status(400).json({ error: 'Missing rol' });
  if (!birthdate) return res.status(400).json({ error: 'Missing birthdate' });

  next();
};

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!isNaN(id)) return res.status(400).json({ error: 'not a valid Id' });

  next();
};

module.exports = {
  validateCreateUser,
  validateUpdateUser,
  validateId,
};
