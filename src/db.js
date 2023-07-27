const { Sequelize } = require('sequelize');
require('dotenv').config();

const UserModel = require('./models/User');
const ProjectModel = require('./models/Project');
const RatingModel = require('./models/Rating');
const GalleryModel = require('./models/Gallery');
const PostModel = require('./models/Post');
const CommentModel = require('./models/Comment');

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
PostModel(sequelize);
CommentModel(sequelize);
GalleryModel(sequelize);

const { User, Project, Rating, Gallery, Comment, Post } = sequelize.models;

//relacion de tablas

//USER-PROJECT
User.belongsToMany(Project, { through: "user_project" });
Project.belongsToMany(User, { through: "user_project" });

//USER-RATING

//  Rating.hasMany(User,{ foreignKey:"user_Id" });
//  User.belongsTo(Rating, { foreignKey:"user_Id" });
User.hasOne(Rating, { foreignKey:"UserId", onDelete: "CASCADE", onUpdate: "CASCADE", });
Rating.belongsTo(User, { foreignKey:"UserId", onDelete: "CASCADE", onUpdate: "CASCADE", });


// USER-COMMENT
User.hasMany(Comment, {onDelete: "CASCADE", onUpdate: "CASCADE", });
Comment.belongsTo(User);


//PROJECT-RATING
Project.hasMany(Rating, { onDelete: "CASCADE", onUpdate: "CASCADE", });
Rating.belongsTo(Project);


//PROJECT-GALLERY
Project.hasMany(Gallery, {  onDelete: "CASCADE", onUpdate: "CASCADE", });
Gallery.belongsTo(Project);


//PROJECT-POST
Project.hasMany(Post, {  onDelete: "CASCADE", onUpdate: "CASCADE", }),
Post.belongsTo(Project);


//POST-COMMENT
// Post.hasMany(Comment, { as:'comment', foreignKey: 'postId'});
// Comment.belongsTo(Post, { as:'user', foreignKey: 'postId'});
Post.hasMany(Comment, { onDelete: "CASCADE", onUpdate: "CASCADE", });
Comment.belongsTo(Post);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
