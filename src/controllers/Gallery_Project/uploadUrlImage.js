const cloudinaryService = require('../../services/cloudinaryService');
const { Gallery } = require('../../db');

const uploadUrlImage = async (req, res) => {
  try {
    const { url, comments } = req.body;

    // console.log(url, comments, ProjectId);

    if (!url) {
      return res.status(400).json({ error: 'URL not valid' });
    }

    const cloudinaryResult = await cloudinaryService.handleUpload(url);

    const imageUrl = await Gallery.create({
      image: cloudinaryResult.secure_url,
      comments,
      ProjectId,
    });

    return res.status(201).json(imageUrl);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = uploadUrlImage;
