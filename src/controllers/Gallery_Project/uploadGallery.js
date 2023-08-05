const { Gallery } = require('../../db');
const { handleUpload } = require('../../services/cloudinaryService');
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });

const uploadGallery = async (req, res) => {
  try {
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const { comments, ProjectId } = req.body;

     console.log(files);

    // if (!path) {
    //   return res.status(400).json({ error: 'File not valid' });
    // }

    const gallery = await Promise.all(
      files.map(async (file) => {
        const cloudinaryResult = await handleUpload(file.path);

        return Gallery.create({
          image: cloudinaryResult.secure_url,
          public_id: cloudinaryResult.public_id,
          comments,
          ProjectId,
        });
      })
    );

    // const gallery = await Gallery.bulkCreate({
      // image: cloudinaryResult.secure_url,
      // public_id: cloudinaryResult.public_id,
      // comments,
      // ProjectId,
    // });

    // fs.unlinkSync(file.path);

    return res.status(201).json(gallery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { upload, uploadGallery };

    