const express = require("express");
const { createCrypt, verifyCrypt } = require("./modules/bcrypt");
require("dotenv").config();

const server = express();

const port = process.env.PORT;

server.listen(process.env.PORT, () => {
  console.log(`Server is running port: ${process.env.PORT}`);
});

async function serverlocal() {}

serverlocal();
