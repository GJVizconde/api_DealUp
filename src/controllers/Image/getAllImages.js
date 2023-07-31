const { Image } = require('../../db');

const getAllImages = async(req, res) => {
    try {

        const dbresults = await Image.findAll();

      return res.status(201).json(dbresults);
      }

      catch (error) {

        res.status(500).json({error: error.message});
      }
}

module.exports = getAllImages;