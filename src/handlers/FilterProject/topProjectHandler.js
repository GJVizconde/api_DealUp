const { topProjectController } = require('../../controllers/Filter_Project/getTopProjectController');

const getTopProjectHandler = async ( req, res) => {

    try {
        const topRating = await topProjectController();

        if(!topRating || topRating.length === 0) {return res.status(204).json({})};

        res.status(200).json( topRating );

    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

module.exports = { getTopProjectHandler }