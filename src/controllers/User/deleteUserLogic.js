const { User } = require('../../db');

const deleteUserLogic = async (id) => {
  try {
    userFound = await User.findByPk(id);

    if (!userFound) {
      throw new Error('User not found');
    }

    const deletedUser = await User.destroy({
      where: {
        id
      }
    });

    return deletedUser;
  } catch (error) {
    throw new Error('Failed to delete user: ' + error.message);
  }
};

module.exports = deleteUserLogic;