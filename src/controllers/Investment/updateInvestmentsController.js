const { Investment } = require('../../db');

const updateInvestment = async (id, contribution, comment, UserId, ProjectId) => {

    try {
      
       const updateInvestmentById = await Investment.findByPk(id);

       if(!updateInvestmentById) { throw new Error('Investment not found')};

       updateInvestmentById.contribution = contribution;
       updateInvestmentById.comment = comment;
       
       await updateInvestmentById.save();

       return updateInvestmentById;

    } catch (error) {
        throw new Error('Update Investments Error: ' + error.message );
    }
};

module.exports = { updateInvestment }