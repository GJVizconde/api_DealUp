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
        }
    }
    )
}