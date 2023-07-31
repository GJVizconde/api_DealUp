const { getAllInvestments } = require('../../controllers/Investment/allInvestmentsController');

const getAllInvestmentHandler = async (req, res) => {

    try {
        
        const allInvestments = await getAllInvestments();
        if(!allInvestments || allInvestments.length === 0) {return res.status(204).json({})}
        res.status(200).json( allInvestments);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getAllInvestmentHandler }