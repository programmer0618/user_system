const express = require("express");
const { postgres } = require("./modules/postgres");
require("dotenv").config();

const server = express();

server.listen(process.env.PORT, () => {
  console.log(`Server is running port: ${process.env.PORT}`);
});

async function serverlocal() {
  try {
    let db = await postgres();
  } catch (error) {
    console.log("Server: ", error);
  }
}

serverlocal();
