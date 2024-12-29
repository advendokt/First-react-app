import mysql from 'mysql2/promise';

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'yourusername',
      password: 'yourpassword',
      database: 'yourdbname',
    });
    console.log('Database connected successfully');
    return connection;
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
};

export default connectDB;
