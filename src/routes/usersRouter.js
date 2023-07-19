const { Router } = require('express');
const getUsersHandler = require('../handlers/Users/getUsersHandler');
const createUserHandler = require('../handlers/Users/createUserHandler');
const getUserHandler = require('../handlers/Users/createUserHandler');

const usersRouter = Router();

usersRouter.get('/', getUsersHandler);

usersRouter.get('/:id', getUserHandler);

usersRouter.post('/', createUserHandler);

module.exports = usersRouter;
