const { Invesments } = require('../../db');

const deleteInvesment = async (id) => {

try {
    
    invesmentFound = await Invesments.findByPk(id);

    if(!invesmentFound) {throw new Error ('Invesment not found')}

    const deleteResult = await Invesments.destroy({
        where: {
            id
        },
    });

    return deleteResult;

} catch (error) {
    throw new Error('Failed to delete Comment: ' + error.message);
}

};

module.exports = { deleteInvesment }