const { Router } = require('express');
const usersRouter = require('./usersRouter');
const projectRouter = require('./projectRouter');

const mainRouter = Router();

mainRouter.use('/user', usersRouter);

mainRouter.use('/projects', projectRouter);

module.exports = mainRouter;
