import express from 'express'
import { addUser, deleteUser, getUsers, updateUser } from '../controller/usersController.mjs';
import { userValidation } from '../middleware/userValidation.mjs';

export const usersRoute = express.Router();

usersRoute.post('', userValidation, addUser)

usersRoute.get('', getUsers)

usersRoute.put('/:id', userValidation, updateUser)

usersRoute.delete('/:id', deleteUser)