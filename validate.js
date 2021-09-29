const express = require('express');
const app = express();
const { validate, ValidationError, Joi } = require('express-validation');

const loginValidation = {
  body: Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
	city: Joi.string()
      .required(),
  }),
}


const validateFn=validate(loginValidation, {}, {});

//console.log(`ddss ${validateFn}`);
module.exports = validateFn;