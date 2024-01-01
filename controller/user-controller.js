const { SignUpValidation } = require("../modules/validations");

module.exports = class UserController {
  static async UserSignUpPostController(req, res, next) {
    try {
      const data = await SignUpValidation(req.body);

      const user = await req.db.users.create({
        user_email: data.email,
        user_password: data.password,
      });

      console.log(user);

      res.status(201).json({
        ok: true,
        message: "Verification link send to email",
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        message: error + "",
      });
      console.log(error);
    }
  }
};
