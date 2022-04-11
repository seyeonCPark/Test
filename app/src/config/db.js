// db 연결
const mysql = require("mysql");

const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    databases : process.env.DB_DATABASES
});

db.connect();

module.exports = db;