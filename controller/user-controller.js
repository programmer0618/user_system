const { SignUpValidation } = require("../modules/validations");
const { sendMail } = require("../modules/email");
const { createToken } = require("../modules/jwt");

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

  static async UserVerifyAccauntByLinkController(req, res, next) {
    try {
      const user_id = req.params.verify_id;
      const user = await req.db.users.findOne({
        where: {
          user_id,
        },
      });

      if (!user) throw new Error("User not found!");

      await req.db.users.update(
        {
          user_is_verified: true,
        },
        {
          where: {
            user_id,
          },
        }
      );

      const token = await createToken({
        user_id,
      });

      res.json({
        ok: true,
        message: "Account successfully verificed",
        data: {
          token,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        ok: false,
        message: error + "",
      });
    }
  }
};
