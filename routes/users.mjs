import express from 'express'

export const usersRoute = express.Router();

const service = new UserService();

//Create
usersRoute.post('', async (req, res) => {

})

//Read
usersRoute.get('', async (req, res) => {

})

//Update
usersRoute.put('/:id', async (req, res) => {

})

//Delete
usersRoute.delete('/:id', async (req, res) => {

})
