import Product from "@/libs/models/Products";
import { mongoConnection } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  URLParams: { params: { id: string } }
) {
  try {
    // Connect to MongoDB
    await mongoConnection();
    const body = await request.json();
    const { id } = URLParams.params;
    const { name, price, category } = body;

    // Fetch all products
    const updatedProduct = await Product.findByIdAndUpdate(id, {
      name,
      price,
      category,
    });

    // Return JSON response
    return NextResponse.json({
      message: "Successfully Updated Product",
      updatedProduct,
    });
  } catch (error) {
    // Return error response
    return NextResponse.json(
      {
        error,
        msg: "Something went wrong.",
      },
      { status: 400 }
    );
  }
}
