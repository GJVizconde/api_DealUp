const { getAllInvesments } = require('../../controllers/Invesment/allInvesmentsController');

const getAllInvesmentHandler = async (req, res) => {

    try {
        
        const allInvesments = await getAllInvesments();
        if(!allInvesments || allInvesments.length === 0) {return res.status(204).json({})}
        res.status(200).json( allInvesments);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getAllInvesmentHandler }