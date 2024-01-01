const { UserSignUpPostController } = require("../controller/user-controller");

const UserRoute = require("express").Router();

UserRoute.post("/account", UserSignUpPostController);

module.exports.UserRoute = UserRoute;
