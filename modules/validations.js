const Joi = require("joi");
const joi = require("joi");

module.exports = class Validations {
  static async SignUpValidation(data) {
    return Joi.object({
      email: joi
        .string()
        .email()
        .required()
        .error(new Error("Email is invalid!")),
      password: joi.string().required(),
    }).validateAsync(data);
  }
};
