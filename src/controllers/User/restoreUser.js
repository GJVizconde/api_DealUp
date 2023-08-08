const { User } = require('../../db');

const restoreUser = async (req, res) => {
  try {

    const { id } = req.params;
    

    const user = await User.findByPk(id, {paranoid: false});

    console.log(user);

    if (!user) {
      throw new Error('User not found');
    }

    user.deletedAt = null;
    await user.save();

    res.status(201);
  } catch (error) {
    res.status(400).json({ error: error.message });
    throw new Error('Failed to restore user: ' + error.message);
  }
};

module.exports = { restoreUser };
