import express from 'express'

export const usersRoute = express.Router();

const service = new UserService();

//Create

//Read
usersRoute.get('', async (req, res) => {

})

//Update

//Delete
