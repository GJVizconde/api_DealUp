const { Router } = require('express');
const userRouter = require('./userRouter');
const projectRouter = require('./projectRouter');
const ratingRouter = require('./ratingRouter');


const mainRouter = Router();

mainRouter.use('/user', userRouter);

mainRouter.use('/projects', projectRouter);

mainRouter.use('/rating', ratingRouter);

module.exports = mainRouter;
