import mysql from 'mysql2';

// Создание подключения к базе данных
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin', // Замените на ваш MySQL пользователь
  password: '12345678', // Замените на ваш MySQL пароль
  database: 'yourdbname', // Замените на вашу базу данных
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    process.exit(1); // Останавливаем сервер, если не можем подключиться
  }
  console.log('Database connected successfully');
});

export default connection;
