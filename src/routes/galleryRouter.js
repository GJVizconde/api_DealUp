const { Router } = require('express');
const uploadUrlImage = require('../controllers/Gallery_Project/uploadUrlImage');
const { upload, uploadFileImage } = require('../controllers/Gallery_Project/uploadFileImage');
const deleteImage = require('../controllers/Gallery_Project/deleteImage');
const updateImage = require('../controllers/Gallery_Project/updateImage');
const getAllImages = require('../controllers/Gallery_Project/getAllImages');
const getImageById = require('../controllers/Gallery_Project/getImageById');

// const {
//   validateCreateUser,
//   validateUpdateUser,
//   validateId,
// } = require('../middlewares/User/index');

const galleryRouter = Router();

galleryRouter.post('/url', uploadUrlImage);

galleryRouter.post('/file', upload.single('image'), uploadFileImage);

galleryRouter.delete('/:id', deleteImage);

galleryRouter.put('/:id', updateImage);

galleryRouter.get('/', getAllImages);

galleryRouter.get('/:id', getImageById);


module.exports = galleryRouter;