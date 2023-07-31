const { Investment, User } = require('../../db');

const getAllInvestments = async () => {

try {
 
    const allInvestments = await Investment.findAll({
        include: [
            {
              model: User,
              attributes: ['id', 'fullName', 'rol'],
              through: {
                attributes: [],
              },
            },]
    });

    if(allInvestments.length === 0) { throw new Error( 'There are no investments')};

    return allInvestments;
} catch (error) {
    throw error;
}

};

module.exports = { getAllInvestments }