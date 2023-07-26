const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Post',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image_gallery: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
            },
            video_gallery: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
            },
        },
    );
};