import express from 'express';

const router = express.Router();
let services = []; // Sample in-memory storage, replace with database if needed

// GET route to fetch all services
router.get('/services', (req, res) => {
  try {
    res.status(200).json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Failed to fetch services" });
  }
});

// POST route to add a new service
router.post('/services', (req, res) => {
  try {
    const newService = req.body;
    if (!newService || !newService.name || !newService.description) {
      return res.status(400).json({ message: "Service name and description are required" });
    }

    services.push(newService); // Add new service to the in-memory array
    res.status(201).json(newService); // Respond with the new service
  } catch (error) {
    console.error("Error adding service:", error);
    res.status(500).json({ message: "Failed to add service" });
  }
});

// DELETE route to remove a service by ID
router.delete('/services/:id', (req, res) => {
  try {
    const { id } = req.params;
    const serviceIndex = services.findIndex(service => service.id === id);

    if (serviceIndex === -1) {
      return res.status(404).json({ message: "Service not found" });
    }

    services.splice(serviceIndex, 1); // Remove the service from the array
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ message: "Failed to delete service" });
  }
});

export default router;
