import expressAsyncHandler from 'express-async-handler';
import { service } from '../service/service.mjs';
import { throwError } from '../util/util.js';

export const addUser = async (req, res) => {
    const body = req.body;
    try {
        const data = await service.addUser(body);
        res.send(data)
    } catch (error) {
        throwError(res, 400, error)
    }
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const data = await service.updateUser(id, body)
    if (data) {
        res.status(200).send({ ...body, id })
    } else {
        throwError(res, 404, `User [${id}] not found`)
    }
}

export const getUsers = async (req, res) => {
    const data = await service.getUsers();
    res.send(data);
}

export const deleteUser = expressAsyncHandler(async (req, res) => {
    const id = req.params.id;
    const data = await service.deleteUser(id);
    if (data) {
        res.status(200).send(`User [${id}] deleted`);
    } else {
        throwError(res, 404, `User [${id}] not found`)
    }
})