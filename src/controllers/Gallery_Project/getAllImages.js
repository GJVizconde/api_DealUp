const cloudinaryService = require('../../services/cloudinaryService');
const { Gallery } = require('../../db');

const getAllImages = async (req, res) => {
  try {
    // const results = await cloudinaryService.getAllImagesFromCloudinary();

    const dbresults = await Gallery.findAll();

    return res.status(201).json(dbresults);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllImages;
