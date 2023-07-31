const { Image } = require('../../db');
// const { updateUpload } = require('../../cloudinary/cloudinaryService');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dgx2v3fnk',
  api_key: '852753386513374',
  api_secret: 'APa-UKXfdLf-WK5K0WBbMHZsJtU',
});

const updateImage = async(req, res) => {
    try {

        const { id } = req.params;
        const { url } = req.body;

        const image = await Image.findByPk(id);

        if (!image) {
            
            return res.status(404).json({ error: 'Image not founded' });
        }

        await cloudinary.uploader.upload(url, {
          public_id: image.public_id,
          overwrite: true
        });

        return res.status(201).json({message: 'Updated correctly'});
      }

      catch (error) {

        res.status(500).json({error: error.message});
      }
}

module.exports = updateImage;