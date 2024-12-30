// serviceController.js
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { addService, getAllServices, deleteService } from '../models/serviceModel.js';

// Папка для загрузки изображений
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Конфигурация multer для загрузки файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Получение всех сервисов
export const getServices = async (req, res) => {
  try {
    const results = await getAllServices();
    res.json(results);
  } catch (err) {
    console.error('Error fetching services:', err);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
};

// Добавление нового сервиса
export const createService = async (req, res) => {
  upload.single('image')(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: `Multer error: ${err.message}` });
    } else if (err) {
      return res.status(500).json({ error: `File upload error: ${err.message}` });
    }

    const { name, description, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newService = { name, description, price, image };

    try {
      const service = await addService(newService);
      res.status(201).json({ message: 'Service added successfully', service });
    } catch (error) {
      console.error('Error adding service:', error);
      res.status(500).json({ error: 'Failed to add service', details: error.message });
    }
  });
};

// Удаление сервиса
export const removeService = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteService(id);
    res.status(200).json({ message: `Service with ID ${id} deleted` });
  } catch (err) {
    console.error('Error deleting service:', err);
    res.status(500).json({ error: 'Failed to delete service', details: err.message });
  }
};
