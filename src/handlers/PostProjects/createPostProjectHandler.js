const { DataTypes } = require('sequelize');
const { createPost } = require('../../controllers/Post_Project/createPostController');

const createPostProjectHandler = async (req, res) => {

try {
  
    const { 
        description,
        image_gellery,
        video_gallery
        //project_id
    } = req.body;
    if(!description) {
        return res.status(400).json('Description is required');
    // } else if(!project_id) {
    //     return res.status(400).json('The project ID is required');
     }


    const newPost = await createPost(
        description,
        image_gellery,
        video_gallery
        //project_id
    );
    
    res.status(201).json({ message:'Proyect created successfully', newPost });

} catch (error) {
    res.status(400).json({ error: error.message })
}
};

module. exports = { createPostProjectHandler }