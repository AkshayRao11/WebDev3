const express = require("express");
const mongoose = require("mongoose");
const gameRoutes = require("./routes/gameRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Database Connection
async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/college");
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
}

connectDB();

// Mount Routes
app.use("/api/games", gameRoutes);

// Root Endpoint
app.get("/", (req, res) => {
  res.send("College Game API is up and running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});