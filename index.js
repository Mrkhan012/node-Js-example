const express = require('express');
const fs = require('fs');
const app = express();

let products = []; // Array to store product data

// Middleware to log requests
app.use((req, res, next) => {
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.error("Failed to write to log file:", err);
        }
    });
    next();
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle creating a product
app.post('/product', (req, res) => {
    try {
        const product = req.body;
        products.push(product);

        res.status(201).json({ message: "Product created", product });
    } catch (error) {
        res.status(400).json({ error: "Invalid JSON data" });
    }
});

// Route to retrieve all products
app.get('/products', (req, res) => {
    res.status(200).json(products);
});

// Handle 404 errors for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});

// Start the server
app.listen(4000, () => {
    console.log("Server started on port 4000");
});
