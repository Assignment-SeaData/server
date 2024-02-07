import { schema } from "../model/userSchema.mjs"
import { throwError } from "../util/util.js";

export const userValidation = (req, res, next) => {
    const body = req.body
    if (Object.keys(body).length === 0) {
        throwError(res, 400, 'body is not provided')
    }
    const { error } = schema.validate(body);
    if (error) {
        throwError(res, 422, error.details[0].message)
    } else {
        next()
    }
}