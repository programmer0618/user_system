const {
  UserSignUpPostController,
  UserVerifyAccauntByLinkController,
} = require("../controller/user-controller");

const UserRoute = require("express").Router();

UserRoute.post("/account", UserSignUpPostController);
UserRoute.get("/verify/:verify_id", UserVerifyAccauntByLinkController);

module.exports.UserRoute = UserRoute;
