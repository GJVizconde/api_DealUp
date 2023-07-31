const { Investment } = require('../../db');
const deleteInvestment = async (id) => {

try {
    
   const investmentFound = await Investment.findByPk(id);

    if(!investmentFound) {throw new Error ('Investment not found')}

    const deleteResult = await Investment.destroy({
        where: {
            id,
        },
    });

    return deleteResult;

} catch (error) {
    throw new Error('Failed to delete Investment: ' + error.message);
}
};

module.exports = { deleteInvestment }