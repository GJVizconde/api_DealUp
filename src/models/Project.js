const DataTypes = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Project',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      min_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      max_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      goal_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      collected_amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      initial_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deadline: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image_cover: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type:DataTypes.STRING,
        allowNull: false
      },
      category: {
        type: DataTypes.JSONB, // Cambio a JSONB
        allowNull: true,
        defaultValue: null,
        validate: {
          isValidCategory(value) {
            const validCategories = [
              'Art',
              'Comics',
              'Crafts',
              'Dance',
              'Design',
              'Fashion',
              'Film & Video',
              'Food',
              'Games',
              'Journalism',
              'Music',
              'Photography',
              'Publishing',
              'Technology',
              'Theater',
              'Sport',
            ];
            const isValid =
              Array.isArray(value) &&
              value.every((item) => validCategories.includes(item));
            if (!isValid) {
              throw new Error('Invalid category');
            }
          },
        },
      },
      average_rating: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      status: {
        type: DataTypes.ENUM('Inactive', 'Rejected', 'Pending', 'Active'),
        allowNull: false,
        defaultValue: 'Pending',
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
