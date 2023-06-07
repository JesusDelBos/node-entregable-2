const Sequelize = require('sequelize');


const db = new Sequelize({
    database: "todos_y11z",
    port: 5432,
    host: "dpg-ci02v75269v5qbkhess0-a.oregon-postgres.render.com",
    username: "jesusdebosque",
    password: "JExo4WAJTWP9C1TXuF9dMmlP03wcx3gn",
    dialect: "postgres",
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false }},
})

module.exports = db;

//postgres://jesusdebosque:JExo4WAJTWP9C1TXuF9dMmlP03wcx3gn@ dpg-ci02v75269v5qbkhess0-a.oregon-postgres.render.com /todos_y11z