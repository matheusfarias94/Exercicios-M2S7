require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/routes.js");
const connection = require("./src/database/connection");
const PORT_API = process.env.PORT_API;

class Server {
  constructor(server = express()) {
    this.middlewares(server);
    this.database();
    server.use(routes);
    this.initializeServer(server);
  }
  async middlewares(server) {
    server.use(cors());
    server.use(express.json())
    console.log("Middlewares executados");
  }
  async database() {
    try {
      await connection.authenticate();
      console.log("Banco de dados conectado!");
      
    } catch (error) {
      console.log("Erro na conexão ao Banco de dados!");
      console.log(error);
    }
  }
  async initializeServer(server) {
    server.listen(PORT_API, () => {
      console.log(`Servidor conectado na porta ${PORT_API}`);
    });
  }
}
module.exports = { Server };
