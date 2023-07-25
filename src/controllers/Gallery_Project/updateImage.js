// const cloudinaryService = require('../../cloudinary/cloudinaryService');
const { Gallery } = require('../../db');

const updateImage = async(req, res) => {
    try {

        const { id } = req.params;
        const { comments } = req.body;

        const image = await Gallery.findByPk(id);

  
        if (!image) {

            return res.status(404).json({ error: 'El rating no fue encontrado' });
        }

        image.comments = comments;
        await image.save();

        return res.status(201).json({message: 'Updated correctly'});
      }

      catch (error) {

        res.status(500).json({error: error.message});
      }
}

module.exports = updateImage;