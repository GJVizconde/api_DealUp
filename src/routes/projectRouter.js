const { Router } = require ( "express" );

const { getProjectsHandler, getIdProjectsHandler }= require('../handlers/Projects/getProjectsHandler');
const {upload, createProjectHandler } = require('../handlers/Projects/postProjectsHandler');
const { updateProjectHandler } = require('../handlers/Projects/putProjectHandler');
const {deleteProjectHandler} = require('../handlers/Projects/deleteProjectHandler');
const { updateHandler } = require('../handlers/Projects/updateHandler');

//POST_PROJECT
const { getPostProjectHandler } = require('../handlers/PostProjects/getAllPostProjectHandler');
const { createPostProjectHandler } = require('../handlers/PostProjects/createPostProjectHandler');
const { updatePostHandler } = require('../handlers/PostProjects/putPostHandler');
const { deletePostHandler } = require('../handlers/PostProjects/deletePostHandler');

//COMMENT_POST_PROJECT
const { getAllComentHandler } = require('../handlers/Comment/getAllCommentsHandler');
const { createCommentHandler } = require('../handlers/Comment/createCommentHandler');
const { updateCommentHandler } = require('../handlers/Comment/updateCommentHandler');
const { deleteCommentHandler } = require('../handlers/Comment/deleteCommentHandler');

// FILTER PROJECT
const { getFilterHandler } = require('../handlers/FilterProject/filterProjectHandler');


const projectRouter = Router();

projectRouter.get('/', getProjectsHandler);

//route filter project
projectRouter.get('/filter', getFilterHandler);

//route comment_post_project
projectRouter.get('/post/comment', getAllComentHandler);
projectRouter.post('/post/comment', createCommentHandler);
projectRouter.put('/post/comment/:id', updateCommentHandler);
projectRouter.delete('/post/comment/:id', deleteCommentHandler);

//route post_project
projectRouter.get('/post', getPostProjectHandler);
projectRouter.post('/post', createPostProjectHandler);
projectRouter.put('/post/:id', updatePostHandler);
projectRouter.delete('/post/:id', deletePostHandler);

//continue route project
projectRouter.get('/:id', getIdProjectsHandler);
//projectRouter.post('/', upload.single('image_cover'), createProjectHandler);
projectRouter.post('/', createProjectHandler);
projectRouter.put('/prueba/:id', updateProjectHandler); //ruta vieja carga todos los campos
projectRouter.delete('/:id', deleteProjectHandler);
projectRouter.put('/:id', updateHandler);


module.exports = projectRouter;