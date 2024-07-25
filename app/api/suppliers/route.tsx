import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { supplier_schema } from "./schema";

export async function GET(request: NextRequest) {
  try {
    // Fetch all suppliers with their associated products
    const all_suppliers = await prisma.supplier.findMany({
      include: {
        products: {
          include: {
            product: true,
          },
        },
      },
    });

    // Log the fetched data
    console.log("Fetched Suppliers:", JSON.stringify(all_suppliers, null, 2));

    // Return the fetched data
    return NextResponse.json(all_suppliers);
  } catch (error: any) {
    console.error("Internal Server Error:", error.message);
    console.error("Full Error Details:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = supplier_schema.safeParse(body);

    if (!validation.success) {
      console.error("Validation Error:", validation.error.errors);
      return NextResponse.json(
        { errors: validation.error.errors },
        { status: 400 }
      );
    }

    const supplier = await prisma.supplier.findUnique({
      where: { email: body.email },
    });

    if (supplier)
      return NextResponse.json(
        { error: "Supplier already exists" },
        { status: 400 }
      );

    const supplierData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      address: body.address,
      country: body.country,
      products: {
        create: body.products.map(
          (product: { name: string; description?: string; price: number }) => ({
            product: {
              create: {
                name: product.name,
                description: product.description,
                price: product.price,
              },
            },
          })
        ),
      },
    };

    const new_supplier = await prisma.supplier.create({
      data: supplierData,
      include: { products: { include: { product: true } } },
    });

    return NextResponse.json(new_supplier, { status: 201 });
  } catch (error: any) {
    console.error("Internal Server Error:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
