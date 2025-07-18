import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRouter from "./routes/router.js"; // Import router

dotenv.config();
const app = express();
 // Define __dirname for ES modules

// Middleware
app.use(cors());
app.use(express.json());

// Use router for /send endpoint
app.use("/", contactRouter);

// Production: Serve static React build


// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});