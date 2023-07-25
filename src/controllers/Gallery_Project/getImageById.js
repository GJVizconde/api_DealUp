const { Gallery } = require('../../db');

const getImageById = async(req, res) => {
    try {

        const { id } = req.params;

        const dbresults = await Gallery.findByPk(id);

        return res.status(201).json(dbresults);
      }

      catch (error) {

        res.status(500).json({error: error.message});
      }
}

module.exports = getImageById;