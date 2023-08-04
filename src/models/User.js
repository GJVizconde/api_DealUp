const DataTypes = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      role: {
        type: DataTypes.ENUM('entrepreneur', 'investor', 'moderator', 'admin'),
        defaultValue: 'entrepreneur',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dni: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: {
          name: 'unique_dni',
          msg: 'DNI already registered',
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthdate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      confirmEmail: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      thirdPartyCreated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
    },
    { 
      timestamps: true,
      paranoid: true 
    }
  );
};
