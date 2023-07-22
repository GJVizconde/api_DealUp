const { User,Project } = require('../../db');

const getUserById = async (id) => {
  const userFound = await User.findAll({
    where: { 
      id
  }, 
  include:{
      model:Project,
      // attributes: [
      //     "id",
      //     "name",
      //     "email",
      //       "rol",
      //   ],
        through: {
          attributes: [],
        },
  }
  });

  return userFound;
};

module.exports = getUserById;
