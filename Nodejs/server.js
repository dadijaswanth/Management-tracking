const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeController = require('./Controller/employeeController');
const dotenv = require("dotenv");
const dbConnection = require("./src/db/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.post('/employees', employeeController.createEmployee);
app.post('/login', employeeController.loginEmployee);
app.post('/admin/login', employeeController.loginAdmin);
app.get('/employees', employeeController.getAllEmployees);
app.post('/admin', employeeController.createAdmin);
app.post('/employees/:employeeId/leaves', employeeController.addLeave);

// Connect to DB and start server
const startServer = async () => {
    try {
        await dbConnection(); // Call the dbConnection function here
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

startServer();
