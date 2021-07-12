const {sequelize, DataTypes, Model} = require('./db');

class Comment extends Model {

}

Comment.init({
    body: DataTypes.TEXT
}, {
    sequelize,
	timestamps: false
})

module.exports = { Comment };