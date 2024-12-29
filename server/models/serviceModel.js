import mysql from 'mysql2';

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'admin', // replace with your MySQL username
  password: '12345678', // replace with your MySQL password
  database: 'yourdbname',
});

// Promisify the pool.query function for convenience
const promisePool = pool.promise();

// Get all services
export const getAllServices = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM services');
    return rows;
  } catch (error) {
    throw new Error('Error fetching services from the database: ' + error.message);
  }
};

// Get a service by ID
export const getServiceById = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM services WHERE id = ?', [id]);
    return rows[0]; // Only one result should be returned
  } catch (error) {
    throw new Error('Error fetching service from the database: ' + error.message);
  }
};

// Add a new service
export const addService = async (service) => {
  try {
    const { name, description, price, image } = service;
    const [result] = await promisePool.query(
      'INSERT INTO services (name, description, price, imagePath) VALUES (?, ?, ?, ?)',
      [name, description, price, image]
    );
    return { id: result.insertId, ...service }; // Return the newly inserted service with the ID
  } catch (error) {
    throw new Error('Error adding service to the database: ' + error.message);
  }
};

// Delete a service by ID
export const deleteService = async (id) => {
  try {
    const [result] = await promisePool.query('DELETE FROM services WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      throw new Error('Service not found');
    }
    return result;
  } catch (error) {
    throw new Error('Error deleting service from the database: ' + error.message);
  }
};
