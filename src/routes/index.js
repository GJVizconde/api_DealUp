const { Router } = require('express');
const userRouter = require('./userRouter');
const projectRouter = require('./projectRouter');
const ratingRouter = require('./ratingRouter');
const galleryRouter = require('./galleryRouter');
const testingRouter = require('./testingRouter');

const mainRouter = Router();

mainRouter.use('/user', userRouter);

mainRouter.use('/projects', projectRouter);

mainRouter.use('/rating', ratingRouter);

mainRouter.use('/gallery', galleryRouter);

mainRouter.use('/testing', testingRouter);

module.exports = mainRouter;
