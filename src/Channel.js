const {sequelize, DataTypes, Model} = require('./db');

class Channel extends Model {

}

Channel.init({
    name: DataTypes.STRING
}, {
    sequelize,
	timestamps: false
})

module.exports = { Channel };