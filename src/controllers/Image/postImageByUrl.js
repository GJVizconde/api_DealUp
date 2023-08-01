const { Image } = require('../../db');
const { handleUpload } = require('../../cloudinary/cloudinaryService');

const postImageByUrl = async (url, req, res) => {
  try {
    // const {  } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL not valid' });
    }

    const result = await handleUpload(url);

    const imageUrl = await Image.create({
      image: result.secure_url,
      public_id: result.public_id
    });

    return res.status(201).json(imageUrl);
  } catch (error) {
    // return res.status(500).json({ error: error.message });
  }
};

module.exports = postImageByUrl;