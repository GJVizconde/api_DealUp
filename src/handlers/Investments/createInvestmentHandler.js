const { createInvestment } = require('../../controllers/Investment/createInvestmentController');

const createInvestmentHandler = async (req, res) => {

try {
    
const { 
    contribution,
    comment,
    UserId,
    ProjectId
} = req.body;

if(!contribution) { res.status(400).json('Contribution is required')};
if(!UserId) { res.status(400).json('User ID is required')};
if(!ProjectId) { res.status(400).json('Project ID is required')};

const newInvestment = await createInvestment(contribution, comment, UserId, ProjectId);

res.status(201).json({ message: 'Investments created successfully', newInvestment});

} catch (error) {
    res.status(400).json({ error: error.message });
}

};

module.exports = { createInvestmentHandler };