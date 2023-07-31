const { Router } = require('express');
const postImageByUrl = require('../controllers/Image/postImageByUrl');
const { upload, uploadImage } = require('../controllers/Image/postImage');
const deleteImage = require('../controllers/Image/deleteImage');
const updateImage = require('../controllers/Image/updateImage');
const updateImageFile = require('../controllers/Image/updateImageFile');
const getAllImages = require('../controllers/Image/getAllImages');
const getImageById = require('../controllers/Image/getImageById');

// const {
//   validateCreateUser,
//   validateUpdateUser,
//   validateId,
// } = require('../middlewares/User/index');

const imageRouter = Router();

imageRouter.post('/url', postImageByUrl);

imageRouter.post('/file', upload.single('image'), uploadImage);

imageRouter.delete('/:id', deleteImage);

imageRouter.put('/:id', updateImage);

imageRouter.put('/file/:id', upload.single('image'), updateImageFile);

imageRouter.get('/', getAllImages);

imageRouter.get('/:id', getImageById);


module.exports = imageRouter;