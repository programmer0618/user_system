const {
  UserSignUpPostController,
  UserVerifyAccauntByLinkController,
  UserLoginPostController,
} = require("../controller/user-controller");

const UserRoute = require("express").Router();

UserRoute.post("/account", UserSignUpPostController);
UserRoute.post("/login", UserLoginPostController);
UserRoute.get("/verify/:verify_id", UserVerifyAccauntByLinkController);

module.exports.UserRoute = UserRoute;
