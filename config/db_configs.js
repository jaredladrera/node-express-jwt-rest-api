const mysql = require('mysql');
require('dotenv').config()

const dbConn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: '',
    database: process.env.DATABASE_NAME
});

dbConn.connect((error) => {
    if(error) throw error;
    console.log('Database connected successfully');
});

module.exports = dbConn;