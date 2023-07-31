const { Sequelize } = require('sequelize');
require('dotenv').config();

const UserModel = require('./models/User');
const ProjectModel = require('./models/Project');
const RatingModel = require('./models/Rating');
const GalleryModel = require('./models/Gallery');
const PostModel = require('./models/Post');
const CommentModel = require('./models/Comment');
const InvestmentModel = require('./models/Investment');
const ImageModel = require('./models/Image');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY, NODE_ENV } = process.env;

let sequelize;
if (NODE_ENV === 'development') {
  sequelize = new Sequelize(
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
} else {
  sequelize = new Sequelize(DB_DEPLOY, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    logging: false,
    native: false,
    charset: 'utf8mb4',
    ssl: true,
  });
}

UserModel(sequelize);
ProjectModel(sequelize);
RatingModel(sequelize);
PostModel(sequelize);
CommentModel(sequelize);
GalleryModel(sequelize);
InvestmentModel(sequelize);
ImageModel(sequelize);

const { User, Project, Rating, Gallery, Comment, Post, Image, Investment } = sequelize.models;

//relacion de tablas

//USER-PROJECT
User.belongsToMany(Project, { through: 'user_project' });
Project.belongsToMany(User, { through: 'user_project' });

//USER-RATING

User.hasOne(Rating, {
  foreignKey: 'UserId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Rating.belongsTo(User, {
  foreignKey: 'UserId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

// USER-COMMENT
User.hasMany(Comment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Comment.belongsTo(User);

//PROJECT-RATING
Project.hasMany(Rating, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Rating.belongsTo(Project);

//PROJECT-GALLERY
Project.hasMany(Gallery, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Gallery.belongsTo(Project);

//PROJECT-INVESTMENT

Project.hasMany(Investment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Investment.belongsTo(Project);


//INVESTMENT-USER
Investment.belongsToMany(User, { through: 'investment_user' });
User.belongsToMany(Investment, { through: 'investment_user' });


//PROJECT-POST
Project.hasMany(Post, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
  Post.belongsTo(Project);

//POST-COMMENT

Post.hasMany(Comment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Comment.belongsTo(Post);



module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
