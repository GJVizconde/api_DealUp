const { Image } = require('../../db');
const {
  deleteImageFromCloudinary,
} = require('../../services/cloudinaryService');

const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'id not valid' });
    }

    const image = await Image.findByPk(id);

    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    await image.destroy();

    await deleteImageFromCloudinary(image.public_id);

    return res.status(201).json({ message: 'Image deleted correctly' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteImage;
