// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port number
const port = 3000;

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
