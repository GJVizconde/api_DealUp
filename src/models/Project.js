const DataTypes = require ('sequelize');

module.exports = (sequelize) => {
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        max_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        goal_amount: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        },
        category: {
            type: DataTypes.ENUM('Art', 'Comics', 'Crafts', 'Dance', 'Design', 'Fashion', 'Film & Video', 'Food', 'Games', 'Journalism', 'Music', 'Photography', 'Publishing', 'Technology', 'Theater'),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
        }
    },
    { timestamps: false }
    );
};