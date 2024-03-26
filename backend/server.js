import express from "express";
import dotenv from "dotenv";
dotenv.config();
// Fetching data
import products from "./data/products.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Api is Running");
});

// Port for get all data
app.get("/api/products", (req, res) => {
  res.json(products);
});
// Route for get the single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
