const { UserRoute } = require("./user-route");

const routes = require("express").Router();

routes.use("/users", UserRoute);

module.exports.routes = routes;
