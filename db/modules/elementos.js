const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('elemento', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
        peso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        calorias: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    });
}
