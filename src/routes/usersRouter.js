const { Router } = require('express');
const getUsersHandler = require('../handlers/Users/getUsersHandler');

const usersRouter = Router();

usersRouter.get('/', getUsersHandler);

module.exports = usersRouter;
