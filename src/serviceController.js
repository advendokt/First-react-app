import db from '../server/db.js';  // Используйте точку для текущей папки



// Получить все сервисы
export const getServices = (req, res) => {
  db.query('SELECT * FROM services', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Ошибка при получении сервисов' });
    }
    res.json(results);
  });
};

// Добавить новый сервис
export const addService = (req, res) => {
  const { name, description } = req.body;
  db.query(
    'INSERT INTO services (name, description) VALUES (?, ?)',
    [name, description],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Ошибка при добавлении сервиса' });
      }
      res.status(201).json({ id: results.insertId, name, description });
    }
  );
};

// Удалить сервис
export const deleteService = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM services WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Ошибка при удалении сервиса' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Сервис не найден' });
    }
    res.json({ message: 'Сервис успешно удален' });
  });
};
