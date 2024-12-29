import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',  // или другой пользователь
  password: '12345678',  // пароль для пользователя
  database: 'my_database'  // имя базы данных
});

db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных: ', err);
  } else {
    console.log('Успешно подключено к базе данных!');
  }
});

export default db;
