const DataTypes = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Rating',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    { 
        timestamps: true
    }
  );
};