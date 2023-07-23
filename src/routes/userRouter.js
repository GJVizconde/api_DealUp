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
  validateLogin,
} = require('../middlewares/User/RoutesValidation');

const userRouter = Router();

userRouter.get('/', getUsersHandler);

userRouter.get('/:id', validateId, getUserHandler);

userRouter.post('/', validateCreateUser, createUserHandler);

userRouter.put('/:id', validateUpdateUser, updateUserHandler);

userRouter.delete('/:id', validateId, deleteUserHandler);

userRouter.post('/login', validateLogin, loginUserHandler);

module.exports = userRouter;
