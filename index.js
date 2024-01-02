const express = require("express");
const { postgres } = require("./modules/postgres");
const { routes } = require("./routes/routes");
const dotenv = require("dotenv");
dotenv.config();

const server = express();

server.listen(process.env.PORT, () => {
  console.log(`Server is running port: ${process.env.PORT}`);
});

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

async function serverlocal() {
  try {
    let db = await postgres();
    server.use((req, res, next) => {
      req.db = db;
      next();
    });
    server.use("/v1", routes);
  } catch (error) {
    console.log("Server: ", error);
  }
}

serverlocal();
