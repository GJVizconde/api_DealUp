const DataTypes = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Image',
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
      }
    },
    { 
        timestamps: true
    }
  );
};