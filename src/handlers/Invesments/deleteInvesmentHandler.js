const { deleteInvesment } = require('../../controllers/Invesment/deleteInvesmentsController');

const deleteInvesmentHandler = async ( req, res) => {

try {
    
    const { id } = req.params;

    const deleteResult = await deleteInvesment(id);

    res.status(200).json({ message: 'Invesment was delete'});

} catch (error) {
    res.status(400).json({ error: error.message });
}

};

module.exports = { deleteInvesmentHandler }