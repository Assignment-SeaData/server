import Joi from 'joi';

export const schema = Joi.object({
    fullName: Joi.string().regex(/^[a-zA-Z]*[a-zA-Z]+\s[a-zA-Z]*[a-zA-Z]+$/).min(3).required().messages({
        'string.empty': 'Please provide your Full Name',
        'string.pattern.base': 'Please provide your Full Name with spaces',
        'any.required': 'Full Name field is required'
    }),
    country: Joi.string().min(4).required().messages({
        'string.empty': 'Please provide your Country',
        'string.min': 'Country field should be 4 letters minimum',
        'any.required': 'Country field is required'
    }),  
    city: Joi.string().required().messages({
        'string.empty': 'Please provide your City',
        'any.required': 'City field is required'
    }), 
    email: Joi.string().email().required().messages({
        'string.empty': 'Please provide your Email',
        'string.email': 'Please provide correct Email',
        'any.required': 'Email field is required'
    }), 
    phoneNumber: Joi.string().regex(/^\+\d{1,4}\d{1,}$/).required().messages({
        'string.empty': 'Please provide your Phone',
        'string.pattern.base': 'Please provide correct Phone Number with code',
        'any.required': 'Country field is required'
    }), 
    jobTitle: Joi.string().required().messages({
        'string.empty': 'Please provide your Job Title',
        'any.required': 'Job Title field is required'
    }),  
    experience: Joi.number().precision(2).min(0).max(100).required().messages({
        'string.empty': 'Please provide your Experience',
        'number.min': 'Experience field should be graeter than 0',
        'number.max': 'Experience field should be less than 100',
        'number.precision': 'Experience field can contain up to two decimal places',
        'any.required': 'Experience field is required'
    }), 
})