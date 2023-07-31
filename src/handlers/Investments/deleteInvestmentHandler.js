const { deleteInvestment } = require('../../controllers/Investment/deleteInvestmentsController');

const deleteInvestmentHandler = async ( req, res) => {

try {
    
    const { id } = req.params;

    const deleteResult = await deleteInvestment(id);

    res.status(200).json({ message: 'Investment was delete'});

} catch (error) {
    res.status(400).json({ error: error.message });
}

};

module.exports = { deleteInvestmentHandler }