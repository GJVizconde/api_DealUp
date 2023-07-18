const DataTypes = require ('sequelize');

module.export = (sequelize) => {
    sequelize.define('Project',
    {

        id: {
            type: DataTypes.UUID,
            primaryKey : true,
            defaultValue: DataTypes.UUIDV4,   
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        min_amount: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        max_amount: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        goal_amount: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        initial_date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deadline: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gallery: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    },
    { timestamps: false }
    )
};