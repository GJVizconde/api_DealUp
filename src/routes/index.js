const { Router } = require('express');
const usersRouter = require('./usersRouter');
const projectRouter = require('./projectRouter');
const ratingRouter = require('./ratingRouter');
const galleryRouter = require('./galleryRouter');

const mainRouter = Router();

mainRouter.use('/users', usersRouter);

mainRouter.use('/projects', projectRouter);

mainRouter.use('/rating', ratingRouter);

mainRouter.use('/gallery', galleryRouter);

module.exports = mainRouter;
