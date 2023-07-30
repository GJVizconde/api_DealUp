const { Invesments } = require('../../db');

const updateInvesment = async (id, contribution, comment, UserId, ProjectId) => {

    try {
       


    } catch (error) {
        throw new Error('Update Invesments Error' + error.message );
    }
};

module.exports = { updateInvesment }