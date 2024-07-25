import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { supplier_schema } from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "id > 10" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "supplier" });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supplier = await prisma.supplier.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!supplier)
      return NextResponse.json(
        { error: "Supplier not found" },
        { status: 404 }
      );

    await prisma.supplier.delete({
      where: { id: supplier.id },
    });
    return NextResponse.json(
      { message: "Supplier deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting supplier:", error);
    return NextResponse.json(
      {
        error: "An error occurred while deleting the supplier",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
      where: { id: params.id },
    });

    if (!supplier)
      return NextResponse.json(
        { error: "supplier not found" },
        { status: 400 }
      );

    const result = await prisma.$transaction(async (prisma) => {
      // Update supplier information
      const updatedSupplier = await prisma.supplier.update({
        where: { id: params.id },
        data: {
          name: body.name,
          email: body.email,
          phone: body.phone,
          address: body.address,
          country: body.country,
        },
      });

      // Handle product updates
      if (body.products && body.products.length > 0) {
        // Remove existing products for this supplier
        await prisma.supplierProduct.deleteMany({
          where: { supplierId: params.id },
        });
        // Add new products
        await prisma.supplier.update({
          where: { id: params.id },
          data: {
            products: {
              create: body.products.map(
                (product: {
                  name: string;
                  description?: string;
                  price: number;
                }) => ({
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
          },
        });
      }

      return updatedSupplier;
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error("Internal Server Error:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
