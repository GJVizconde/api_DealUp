const { User } = require('../../db');

const deleteUser = async (id) => {
  try {
    userFound = await User.findByPk(id);

    if (!userFound) {
      throw new Error('User not found');
    }

    const deletedUser = await User.destroy({
      where: {
        id,
      },
      force: true, // Desactiva la eliminación lógica
    });

    return deletedUser;
  } catch (error) {
    throw new Error('Failed to delete user: ' + error.message);
  }
};

module.exports = deleteUser;
