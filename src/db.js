const { Sequelize } = require('sequelize');
require('dotenv').config();

const UserModel = require('./models/User');
const ProjectModel = require('./models/Project');
const RatingModel = require('./models/Rating');
const GalleryModel = require('./models/Gallery');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dealupdb`,
  {
    logging: false,
    native: false,
    charset: 'utf8mb4',
    define: {
      validate: true,
    },
  }
);

// const sequelize = new Sequelize(DB_DEPLOY,
// {
//   logging: false,
//   native: false,
//   charset: 'utf8mb4',
// }
// );

UserModel(sequelize);
ProjectModel(sequelize);
RatingModel(sequelize);
GalleryModel(sequelize);

const { User, Project, Rating, Gallery } = sequelize.models;

//relacion de tablas
User.belongsToMany(Project, { through: "user_project" });
Project.belongsToMany(User, { through: "user_project" });


// Rating.hasMany(User,{ foreignKey:"ratingId" });
// User.belongsTo(Rating);

// Project.hasMany(Rating, { foreignKey: 'projectId' });
// Rating.belongsTo(Project);


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
