const { Gallery } = require('../../db');
const cloudinaryService = require('../../cloudinary/cloudinaryService');
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });

const uploadFileImage = async(req, res) => {
    try {

      const { path  } = req.file;
      const { comments,ProjectId } = req.body;

     console.log(path);

      if (!path) {
        return res.status(400).json({ error: 'URL not valid' });
      }

      const cloudinaryResult = await cloudinaryService.handleUpload(path);


      const gallery = await Gallery.create({image: cloudinaryResult.secure_url, public_id: cloudinaryResult.public_id, comments, ProjectId});


      // fs.unlinkSync(file.path);

      return res.status(201).json(gallery);
      }

      catch (error) {

        res.status(500).json({error: error.message});
      }
}

module.exports = {upload, uploadFileImage};