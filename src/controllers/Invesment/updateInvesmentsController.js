const { Invesments } = require('../../db');

const updateInvesment = async (id, contribution, comment, UserId, ProjectId) => {

    try {
       const updateInvesmentById = await Invesments.findByPk(id);

       if(!updateInvesmentById) { throw new Error('Invesment not found')};

       updateInvesmentById.contribution = contribution;
       updateInvesmentById.comment = comment;

       return updateInvesmentById;


    } catch (error) {
        throw new Error('Update Invesments Error' + error.message );
    }
};

module.exports = { updateInvesment }