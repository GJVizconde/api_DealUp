const { conn } = require('../../db');

const getDateHandler = async (req, res) => {
  try {
    const result = await conn.query('SELECT NOW()');
    const date = result[0][0].now; // Extract the date value from the result
    res.status(200).json({ date });
  } catch (error) {
    console.error('Error fetching date:', error);
    res.status(500).json({ message: 'Error fetching date' });
  }
};

module.exports = getDateHandler;
