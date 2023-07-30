const { Invesments } = require('../../db');

const getAllInvesments = async () => {

try {
    const allInvesments = await Invesments.findAll();

    if(!allInvesments) { throw new Error( 'There are no investments')};

    return allInvesments;
} catch (error) {
    throw new Error('Error' + error.message );
}

};

module.exports = { getAllInvesments }