const { Router } = require('express');
const getUsersHandler = require('../handlers/User/getUsersHandler');
const createUserHandler = require('../handlers/User/createUserHandler');
const getUserHandler = require('../handlers/User/getUserHandler');
const updateUserHandler = require('../handlers/User/updateUserHandler');
const deleteUserHandler = require('../handlers/User/deleteUserHandler');
const loginUserHandler = require('../handlers/User/loginUserHandler');

const {
  validateCreateUser,
  validateUpdateUser,
  validateId,
} = require('../middlewares/User/index');

const usersRouter = Router();

usersRouter.get('/', getUsersHandler);

usersRouter.get('/:id', validateId, getUserHandler);

usersRouter.post('/', validateCreateUser, createUserHandler);

usersRouter.put('/:id', validateUpdateUser, updateUserHandler);

usersRouter.delete('/:id', validateId, deleteUserHandler);

usersRouter.post('/login', loginUserHandler);

module.exports = usersRouter;
