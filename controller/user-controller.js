const { SignUpValidation } = require("../modules/validations");
const { sendMail } = require("../modules/email");

module.exports = class UserController {
  static async UserSignUpPostController(req, res, next) {
    try {
      const data = await SignUpValidation(req.body);

      const users = await req.db.users.create({
        user_email: data.email,
        user_password: data.password,
      });

      await sendMail(
        `Please click to link: http://localhost/users/verify/${users.dataValues.user_id}`,
        data.email
      );

      await res.status(201).json({
        ok: true,
        message: "Verification link send to email",
        user_id: users.dataValues.user_id,
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
