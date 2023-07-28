const { Router } = require('express');
const getUsersHandler = require('../handlers/User/getUsersHandler');
const { upload, createUserHandler } = require('../handlers/User/createUserHandler');
const getUserHandler = require('../handlers/User/getUserHandler');
const updateUserHandler = require('../handlers/User/updateUserHandler');
const deleteUserHandler = require('../handlers/User/deleteUserHandler');
const loginUserHandler = require('../handlers/User/loginUserHandler');

const {
  validateCreateUser,
  validateUpdateUser,
  validateId,
  validateLogin,
} = require('../middlewares/User/routesValidation');

const userAccess = require('../middlewares/User/userAccess');

const userRouter = Router();

// userAccess(['entrepreneur', 'admin'])

userRouter.get('/', getUsersHandler);

userRouter.get('/:id', validateId, getUserHandler);

userRouter.post('/', upload.single('avatar'), validateCreateUser,  createUserHandler);

userRouter.put('/:id', validateUpdateUser, updateUserHandler);

userRouter.delete('/:id', validateId, deleteUserHandler);

userRouter.post('/login', validateLogin, loginUserHandler);

module.exports = userRouter;
