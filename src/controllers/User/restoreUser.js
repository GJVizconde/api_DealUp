const { User } = require('../../db');

const restoreUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id, { paranoid: false });

    if (!user) {
      throw new Error('User not found');
    }

    await user.restore();

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
    throw new Error('Failed to restore user: ' + error.message);
  }
};

module.exports = { restoreUser };
