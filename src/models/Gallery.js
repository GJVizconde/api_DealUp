const DataTypes = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Gallery',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      public_id: {
        type: DataTypes.STRING,
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