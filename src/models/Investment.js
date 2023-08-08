const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Investment',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            contribution:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            status: {
                type: DataTypes.ENUM('pending', 'approved', 'refused'),
                defaultValue:'pending',
            },
            payment_time: {
                type: DataTypes.STRING,
                allowNull: true,
            },
           
        },
        { timestamps: true }
    );
};