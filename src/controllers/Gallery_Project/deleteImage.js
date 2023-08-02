const { Gallery } = require('../../db');
const cloudinaryService = require('../../services/cloudinaryService');

const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    //  console.log(id);

    if (!id) {
      return res.status(400).json({ error: 'id not valid' });
    }

    const gallery = await Gallery.findByPk(id);

    if (!gallery) {
      return res.status(404).json({ error: 'Image not found' });
    }

    await gallery.destroy();

    await cloudinaryService.deleteImageFromCloudinary(gallery.public_id);

    return res.status(201).json({ message: 'Image deleted correctly' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteImage;
