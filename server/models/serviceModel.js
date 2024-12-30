// serviceModel.js
import connection from '../config/connection.js';

// Функция для добавления нового сервиса в базу данных
export const addService = (newService) => {
  return new Promise((resolve, reject) => {
    const { name, description, price, image } = newService;

    const query = 'INSERT INTO services (name, description, price, image_path) VALUES (?, ?, ?, ?)';
    const values = [name, description, price, image];

    connection.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          id: results.insertId,
          name,
          description,
          price,
          image
        });
      }
    });
  });
};

// Функция для получения всех сервисов
export const getAllServices = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM services';

    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Функция для удаления сервиса
export const deleteService = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM services WHERE id = ?';

    connection.query(query, [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
