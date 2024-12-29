// Importing required functions and dependencies
import { getAllServices, getServiceById, addService, deleteService } from '../models/serviceModel.js'; // import model functions
import multer from 'multer'; // import multer for file uploads

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Set the destination directory for the uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);  // Set a unique filename for each file
  }
});

const upload = multer({ storage });

// Controller Functions

// Function to get all services
export const getServices = async (req, res) => {
  console.log('Fetching all services');
  try {
    const results = await getAllServices(); // Call the model function to get all services
    res.json(results); // Send the result as a response
  } catch (err) {
    console.error('Database query failed:', err);
    res.status(500).json({ error: 'Database query failed', details: err.message });
  }
};

// Function to get a service by its ID
export const getServiceById = async (req, res) => {
  const { id } = req.params;  // Get the ID from request parameters
  console.log(`Fetching service with id: ${id}`);
  try {
    const result = await getServiceById(id); // Call the model function to get the service by ID
    if (!result) {
      return res.status(404).json({ error: 'Service not found' }); // If service is not found, return 404
    }
    res.json(result);  // Send the service data as response
  } catch (err) {
    console.error('Database query failed:', err);
    res.status(500).json({ error: 'Database query failed', details: err.message });
  }
};

// Function to add a new service
export const addService = (req, res) => {
  upload.single('image')(req, res, async (err) => {  // Handle file upload using multer
    if (err) {
      console.error('File upload error:', err);
      return res.status(500).json({ error: 'File upload failed', details: err.message });
    }

    console.log('Request body:', req.body);  // Log the request body
    console.log('Uploaded file:', req.file);  // Log the uploaded file

    const { name, description, price } = req.body;  // Get data from the request body
    const image = req.file;  // Get the uploaded file

    const newService = {
      name,
      description,
      price,
      image: image ? `/uploads/${image.filename}` : null,  // Save image path if there is an image
    };

    try {
      const service = await addService(newService);  // Call the model function to add the service
      console.log('Service saved:', service);
      res.status(201).json({ message: 'Service added successfully', service });  // Send success response
    } catch (error) {
      console.error('Error saving service:', error);
      res.status(500).json({ error: 'Error adding service', details: error.message });
    }
  });
};

// Function to delete a service
export const deleteService = async (req, res) => {
  const { id } = req.params;  // Get the ID from request parameters
  console.log(`Deleting service with id: ${id}`);
  try {
    await deleteService(id);  // Call the model function to delete the service
    res.status(200).send(`Service with id ${id} deleted`);  // Send success response
  } catch (err) {
    console.error('Database delete failed:', err);
    res.status(500).json({ error: 'Database delete failed', details: err.message });
  }
};
