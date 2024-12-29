const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const serviceController = require('./serviceController'); // Import the service controller

const app = express();

// Middleware setup
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse incoming JSON requests

// Use the routes from the service controller
app.use(serviceController);

// Server Setup
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
