import Product from "@/libs/models/Products";
import { mongoConnection } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  request: NextRequest,
  URLParams: { params: { id: string } }
) => {
  console.log(URLParams);
  try {
    const { id } = URLParams.params;
    console.log(id);
    // Connect to MongoDB
    await mongoConnection();

    // Fetch all products
    await Product.findByIdAndDelete(id);

    // Return JSON response
    return NextResponse.json({
      message: "Successfully delete",
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
};
