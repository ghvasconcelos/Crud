import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "20021123Gugu.",
    database: "crud"
})

