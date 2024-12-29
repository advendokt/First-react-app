import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import serviceRoutes from './routes/serviceRoutes.js';
import bodyParser from 'body-parser';
import connectDB from './db.js'; // Import the database connection
import multer from 'multer'; // Import multer for handling multipart/form-data

const app = express();
const PORT = process.env.PORT || 3001; // Change the port to 3001

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the uploads folder exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse urlencoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to handle multipart/form-data
const upload = multer({ dest: uploadsDir });
app.use(upload.any());

// Middleware to serve static files from the uploads directory
app.use('/uploads', express.static(uploadsDir));

// Add a route to check the database connection
app.get('/api/check-db-connection', async (req, res) => {
  try {
    const connection = await connectDB();
    await connection.query('SELECT 1');
    res.status(200).json({ message: 'Database connection successful' });
  } catch (err) {
    res.status(500).json({ error: 'Database connection failed', details: err.message });
  }
});

// Log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Use service routes
app.use('/api', serviceRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

// ...existing code...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
