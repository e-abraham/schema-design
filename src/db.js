const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('database', 'username','password', {
	dialect: 'sqlite',
	storage : './youtube.sqlite',
	logging: false
} )

module.exports = {sequelize, DataTypes, Model};