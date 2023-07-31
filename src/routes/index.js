const { Router } = require('express');
const rootRouter = require('../utils/rootRouter');
const userRouter = require('./userRouter');
const projectRouter = require('./projectRouter');
const ratingRouter = require('./ratingRouter');
const galleryRouter = require('./galleryRouter');
const testingRouter = require('./testingRouter');
const imageRouter = require('./imageRouter');

const mainRouter = Router();
rootRouter(mainRouter);

mainRouter.use('/user', userRouter);

mainRouter.use('/projects', projectRouter);

mainRouter.use('/rating', ratingRouter);

mainRouter.use('/gallery', galleryRouter);

mainRouter.use('/testing', testingRouter);

mainRouter.use('/image', imageRouter);

module.exports = mainRouter;
