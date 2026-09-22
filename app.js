const express = require("express");
const app = express();
const logger = require("./Middleware/logger");
const studentRoutes = require("./Routes/student_routes");


// Middleware
app.use(express.json());


// Custom logger middleware
app.use(logger);


// Student routes
app.use("/students", studentRoutes);


// Home route
app.get("/", (req, res) => {
    res.send("Student Management REST API is running");
});


// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});


// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});