import db from '../db.js';

export const getServices = (req, res) => {
  db.query('SELECT * FROM services', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);
  });
};

export const getServiceById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM services WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query failed' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json(results[0]);
  });
};

export const addService = (req, res) => {
  const { name, description, price } = req.body;
  if (!name || !description || !price) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const newService = { name, description, price };
  db.query('INSERT INTO services SET ?', newService, (err, results) => {
    if (err) {
      console.error('Database insert failed:', err); // Log the error
      return res.status(500).json({ error: 'Database insert failed', details: err.message });
    }
    res.status(201).json({ id: results.insertId, ...newService });
  });
};

export const deleteService = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM services WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database delete failed' });
    }
    res.status(200).send(`Service with id ${id} deleted`);
  });
};