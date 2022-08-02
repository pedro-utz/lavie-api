const Sequelize = require("sequelize");

const DB_NAME = "la-vie";
const DB_USER = "root";
const DB_PASS = "mysql"; //alterar de acordo com a senha do seu banco
const DB_CONFIG = {
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3306,
};

// objeto para guardar a conexão do banco dados
let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Error ao tentar uma conexão com banco dados");
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log("Banco dados conectado!");
  } catch (error) {
    console.log(error)
    console.error("Erro ao tentar se conectar ao banco de dados1");
  }
}

Object.assign(db, {
  hasConnection,
});

module.exports = db;