const { Router } = require('express');
const getUsersHandler = require('../handlers/Users/getUsersHandler');
const createUserHandler = require('../handlers/Users/createUserHandler');
const getUserHandler = require('../handlers/Users/getUserHandler');
const updateUserHandler = require('../handlers/Users/updateUserHandler');
const deleteUserHandler = require('../handlers/Users/deleteUserHandler');

const usersRouter = Router();

usersRouter.get('/', getUsersHandler);

usersRouter.get('/:id', getUserHandler);

usersRouter.post('/', createUserHandler);

usersRouter.put('/:id', updateUserHandler);

usersRouter.delete('/:id', deleteUserHandler);

module.exports = usersRouter;
