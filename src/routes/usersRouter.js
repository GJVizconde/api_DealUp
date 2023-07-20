const { Router } = require('express');
const getUsersHandler = require('../handlers/User/getUsersHandler');
const createUserHandler = require('../handlers/User/createUserHandler');
const getUserHandler = require('../handlers/User/getUserHandler');
const updateUserHandler = require('../handlers/User/updateUserHandler');
const deleteUserHandler = require('../handlers/User/deleteUserHandler');

const usersRouter = Router();

usersRouter.get('/', getUsersHandler);

usersRouter.get('/:id', getUserHandler);

usersRouter.post('/', createUserHandler);

usersRouter.put('/:id', updateUserHandler);

usersRouter.delete('/:id', deleteUserHandler);

module.exports = usersRouter;
