const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'db',
    user: 'admin',
    password: 'root',
    database: 'demo'
})


module.exports = mysqlPool