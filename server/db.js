import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017'; // Замените на адрес вашей базы данных
const client = new MongoClient(url);

let db;

const connectToDB = async () => {
  try {
    await client.connect();
    console.log('Подключено к MongoDB');
    db = client.db('yourDatabaseName'); // Замените на имя вашей базы данных
  } catch (error) {
    console.error('Ошибка подключения к базе данных:', error);
    throw error;
  }
};

const getDB = () => {
  if (!db) {
    throw new Error('База данных не подключена. Сначала вызовите connectToDB.');
  }
  return db;
};

export { connectToDB, getDB };
