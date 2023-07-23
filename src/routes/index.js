const { Router } = require('express');
const usersRouter = require('./usersRouter');
const projectRouter = require('./projectRouter');
const ratingRouter = require('./ratingRouter');

const mainRouter = Router();

mainRouter.use('/user', usersRouter);

mainRouter.use('/projects', projectRouter);

mainRouter.use('/rating', ratingRouter);

module.exports = mainRouter;
