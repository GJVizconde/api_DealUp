const { Router } = require('express');
const userRouter = require('./userRouter');
const projectRouter = require('./projectRouter');
const ratingRouter = require('./ratingRouter');
const galleryRouter = require('./galleryRouter');

const mainRouter = Router();

mainRouter.use('/user', userRouter);

mainRouter.use('/projects', projectRouter);

mainRouter.use('/rating', ratingRouter);

mainRouter.use('/gallery', galleryRouter);

module.exports = mainRouter;
