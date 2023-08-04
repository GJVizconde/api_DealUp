const { Project } = require('../../db');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dgx2v3fnk',
  api_key: '852753386513374',
  api_secret: 'APa-UKXfdLf-WK5K0WBbMHZsJtU',
});

const updateProject = async (id, campoActualizar, path) => {
  try {

    const updatedProjectById = await Project.findByPk(id);

    const public = updatedProjectById.image_cover.split('/').pop();
    const publicId = public.replace('.jpg', '');
    console.log('public_id:', publicId);

    if (!updatedProjectById) {
      throw new Error('Project not found');
    }
    if (campoActualizar.name !== undefined) {
      updatedProjectById.name = campoActualizar.name;
    }
    if (campoActualizar.description !== undefined) {
      updatedProjectById.description = campoActualizar.description;
    }
    if (campoActualizar.min_amount !== undefined) {
      updatedProjectById.min_amount = campoActualizar.min_amount;
    }
    if (campoActualizar.max_amount !== undefined) {
      updatedProjectById.max_amount = campoActualizar.max_amount;
    }
    if (campoActualizar.goal_amount !== undefined) {
      updatedProjectById.goal_amount = campoActualizar.goal_amount;
    }
    if (campoActualizar.initial_date !== undefined) {
      updatedProjectById.initial_date = campoActualizar.initial_date;
    }
    if (campoActualizar.deadline !== undefined) {
      updatedProjectById.deadline = campoActualizar.deadline;
    }
    if(path){

      const newImage = await cloudinary.uploader.upload(path, {
      public_id: publicId,
      overwrite: true
      });
      updatedProjectById.image_cover = newImage.secure_url
    }
    if(campoActualizar.image_cover !== undefined){

      const newImage = await cloudinary.uploader.upload(campoActualizar.image_cover, {
      public_id: publicId,
      overwrite: true
      });
      updatedProjectById.image_cover = newImage.secure_url
    }
    if (campoActualizar.category !== undefined) {
      updatedProjectById.category = campoActualizar.category;
    }
    if (campoActualizar.status !== undefined) {
      updatedProjectById.status = campoActualizar.status;
    }
    if (campoActualizar.city !== undefined) {
      updatedProjectById.city = campoActualizar.city;
    }

    if (campoActualizar.city !== undefined) {
      updatedProjectById.city = campoActualizar.city;
    }
    if (campoActualizar.city !== undefined) {
      updatedProjectById.city = campoActualizar.city;
    }
    if (campoActualizar.collected_amount !== undefined) {
      updatedProjectById.collected_amount = campoActualizar.collected_amount;
    }

    await updatedProjectById.save();
    return updatedProjectById;
  } catch (error) {}
};

module.exports = { updateProject };
