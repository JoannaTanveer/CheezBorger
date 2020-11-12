var mysql = require("mysql");
var path = require("path");
const fs = require("fs");
const seed = fs.readFileSync(path.resolve(__dirname + "/../db/seeds.sql"))
const schema = fs.readFileSync(path.resolve(__dirname + "/../db/schema.sql"))
var connection = mysql.createConnection(process.env.JAWSDB_URL || {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Ash4Cynth!4",
  database: "hamburger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId)
  connection.query(schema, () => {
    connection.query(seed)
  })
});

module.exports = connection;
