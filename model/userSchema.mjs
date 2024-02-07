import Joi from "joi";

export const schema = Joi.object({
    fullName: Joi.string().min(3).required(), 
    country: Joi.string().min(4).required(), 
    city: Joi.string().min(1).required(), 
    email: Joi.string().email().required(), 
    phoneNumber: Joi.string().min(10).required(), 
    jobTitle: Joi.string().min(1).required(), 
    experience: Joi.number().min(0).max(100).required()
})