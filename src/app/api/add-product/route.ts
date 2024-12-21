import Product from "@/libs/models/Products";
import { mongoConnection } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { name, imgSrc, fileKey, category, price } = await request.json();

    // Establish MongoDB connection
    await mongoConnection();

    // Create new product entry
    const data = await Product.create({
      name,
      imgSrc,
      fileKey,
      category,
      price,
    });

    // Return success response
    return NextResponse.json({
      msg: "success",
      data,
    });
  } catch (err) {
    // Return error response
    return NextResponse.json(
      {
        err: err || "An error occurred",
        msg: "something went wrong..",
      },
      { status: 400 }
    );
  }
};
