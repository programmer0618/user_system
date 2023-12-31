const { Sequelize } = require("sequelize");
const UserModel = require("../models/user-model");
require("dotenv");
const url = process.env.SQL_CONNECTION_URL;
const sequelize = new Sequelize(
  "postgres://postgres:programmer@localhost:5432",
  {
    logging: false,
  }
);

async function postgres() {
  try {
    await sequelize.authenticate();
    let db = {};
    db.users = await UserModel(Sequelize, sequelize);
    await sequelize.sync({ force: false });
    return db;
  } catch (error) {
    console.log("SQL_ERROR ", error);
  }
}

module.exports.postgres = postgres;
