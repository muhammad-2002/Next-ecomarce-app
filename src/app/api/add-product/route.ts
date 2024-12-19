import { iProduct } from "@/app/admin/dashboard/page";
import Product from "@/libs/models/Products";
import { mongoConnection } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await mongoConnection();
    console.log("Database connected successfully");

    // Parse JSON data from the request
    const body: iProduct = await request.json();

    // Destructure and validate required fields
    const { imgSrc, fileKey, name, category, price } = body;

    if (!imgSrc || !fileKey || !name || !category || !price) {
      return NextResponse.json(
        { msg: "All fields are required." },
        { status: 400 }
      );
    }

    // Create a new product document
    const newProduct = new Product({
      imgSrc,
      fileKey,
      name,
      category,
      price,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    // Return success response
    return NextResponse.json(
      {
        msg: "Product created successfully",
        product: savedProduct,
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Handle errors
    console.error("Error saving product:", error.message);
    return NextResponse.json(
      { error: error.message, msg: "Failed to create product." },
      { status: 500 }
    );
  }
}
