// backend/index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:3000" // Update if frontend runs on a different port
}));
app.use(express.json());

// MongoDB Connection
const MONGO_URI = "mongodb+srv://ESHAA:kB47Sm2uq5niFnZ0@cluster0.y6pqv.mongodb.net/<databaseName>?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

// Define Product Schema
const productSchema = new mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  price: String,
  description: String
});

const Product = mongoose.model('Product', productSchema);

// API Route to Get Products
app.get('/api/products', async (req, res) => {
  console.log("Received request to /api/products"); // Log when endpoint is hit
  try {
    const products = await Product.find();
    console.log("Fetched products:", products); // Log fetched data
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
