
const { filterController } = require('../../controllers/Filter_Project/filterProjectController');

const getFilterHandler = async (req, res) => {
 
    try {
        const { category } = req.body;
        
        const filterResult = await filterController(category);

    res.status(200).json(filterResult);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

module.exports = { getFilterHandler }