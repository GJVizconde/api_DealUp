const { Invesments } = require('../../db');

const getAllInvesments = async () => {

try {
    console.log("estoy en controller de invesments");
    const allInvesments = await Invesments.findAll();

    if(allInvesments.length === 0) { throw new Error( 'There are no investments')};

    return allInvesments;
} catch (error) {
    throw error;
}

};

module.exports = { getAllInvesments }