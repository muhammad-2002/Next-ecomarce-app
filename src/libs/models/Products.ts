import { model, models, Schema } from "mongoose";

// Define the product schema
const productSchema = new Schema({
  imgSrc: {
    type: String,
    required: true, // Corrected "require" to "required"
  },
  fileKey: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

// Create or retrieve the Product model
const Product = models.Product || model("Product", productSchema);

// Log confirmation message
console.log("Product model loaded successfully");

export default Product;
