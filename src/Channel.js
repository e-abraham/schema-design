const {sequelize, DataTypes, Model} = require('./db');

class Channel extends Model {

}

Channel.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subscribers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize,
	timestamps: false
})

module.exports = { Channel };