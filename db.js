const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    // host: 'db',
    // user: 'admin',
    // password: 'root',
    // database: 'demo'

    host: "http://10.90.202.203",
    user: 'admin',
    password: 'root',
    database: 'demo'
})


module.exports = mysqlPool