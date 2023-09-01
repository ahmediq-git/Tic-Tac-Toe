const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../config');

const Leaderboard = sequelize.define("leaderboard", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});


module.exports = Leaderboard;