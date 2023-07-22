const { Rating } = require('../../db');

const getRatingById = async (req, res) => {
  try {

    const { id } = req.params;

    const rating = await Rating.findByPk(id);


    if (!rating) {
      return res.status(404).json({ error: 'Rating not found' });
    }

    res.json({message: 'Rating founded', rating});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getRatingById;