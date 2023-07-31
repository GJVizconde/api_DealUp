const { Image } = require('../../db');
const { handleUpload } = require('../../cloudinary/cloudinaryService');
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });

const uploadImage = async (req, res) => {
  try {
    const { path } = req.file;
    // const { comments, ProjectId } = req.body;

     console.log(path);
     console.log('lol');

    if (!path) {
      return res.status(400).json({ error: 'URL not valid' });
    }

    const result = await handleUpload(path);

    const image = await Image.create({
      image: result.secure_url,
      public_id: result.public_id
    });

    // fs.unlinkSync(file.path);

    return res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { upload, uploadImage };