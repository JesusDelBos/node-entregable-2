const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Todo = db.define('todos', {
    
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    completed:{
        type: DataTypes.STRING(30),
        allowNull: false
    }
})

module.exports = Todo;