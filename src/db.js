const { Sequelize } = require('sequelize');
require('dotenv').config();

const UserModel = require('./models/User');
const ProjectModel = require('./models/Project');

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

const { User, Project } = sequelize.models;

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
