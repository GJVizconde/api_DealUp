const { Router } = require ( "express" );

const { getProjectsHandler, getIdProjectsHandler }= require('../handlers/Projects/getProjectsHandler');
const { createProjectHandler } = require('../handlers/Projects/postProjectsHandler');
const { updateProjectHandler } = require('../handlers/Projects/putProjectHandler');
const {deleteProjectHandler} = require('../handlers/Projects/deleteProjectHandler');
const { updateHandler } = require('../handlers/Projects/updateHandler');

//POST_PROJECT
const { getPostProjectHandler } = require('../handlers/PostProjects/getAllPostProjectHandler');
const { createPostProjectHandler } = require('../handlers/PostProjects/createPostProjectHandler');
const { updatePostHandler } = require('../handlers/PostProjects/putPostHandler');
const { deletePostHandler } = require('../handlers/PostProjects/deletePostHandler');

const projectRouter = Router();

projectRouter.get('/', getProjectsHandler);
//rute post_project
projectRouter.get('/post', getPostProjectHandler);
projectRouter.post('/post', createPostProjectHandler);
projectRouter.put('/post/:id', updatePostHandler);
projectRouter.delete('/post/:id', deletePostHandler);

//continue rute project
projectRouter.get('/:id', getIdProjectsHandler);
projectRouter.post('/', createProjectHandler);
projectRouter.put('/prueba/:id', updateProjectHandler); //ruta vieja carga todos los campos
projectRouter.delete('/:id', deleteProjectHandler);
projectRouter.put('/:id', updateHandler);




// projectRouter.get('/post/comment', postProjectRouter);

module.exports = projectRouter;