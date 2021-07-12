const {sequelize, DataTypes, Model} = require('./db');
const {Video} = require("./Video")
const {CommSection} = require("./CommSection")
const {Comment} = require("./Comment")
const {Playlist} = require("./Playlist")
const {Channel} = require("./Channel")

CommSection.belongsTo(Video)
Video.hasOne(CommSection)

Comment.belongsTo(CommSection)
CommSection.hasMany(Comment)

Video.belongsTo(Playlist)
Playlist.hasMany(Video)

Video.belongsTo(Channel)
Channel.hasMany(Video)

module.exports = { Video, CommSection, Comment, Playlist, Channel };