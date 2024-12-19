import Product from "@/libs/models/Products";
import { mongoConnection } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Connect to MongoDB
    await mongoConnection();

    // Fetch all products
    const data = await Product.find({});
    console.log(data);

    // Return JSON response
    return NextResponse.json(data);
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
