const { types } = require("util");

module.exports = function(sequelize, DataTypes) {
    let Types = sequelize.define('Types', {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eaten: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    return Types;
}