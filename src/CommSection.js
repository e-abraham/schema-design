const {sequelize, DataTypes, Model} = require('./db');

class CommSection extends Model {

}

CommSection.init({
    status: DataTypes.ENUM("enabled", 'disabled')
}, {
    sequelize,
	timestamps: false
})

module.exports = { CommSection };