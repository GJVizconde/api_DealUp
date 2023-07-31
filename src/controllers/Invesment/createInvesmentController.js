const { Invesments } = require('../../db');

const createInvesment = async (contribution, comment, UserId, ProjectId) => {

try {

    const newInvesment = await Invesments.create({
        contribution,
        comment,
        UserId,
        ProjectId
    });

    return newInvesment;
    
} catch (error) {
   
    throw new Error('Failed creating new Invesments' + error.message);
}

};

module.exports = { createInvesment }