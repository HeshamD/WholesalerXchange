import { z } from "zod";

export const product_schema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
});

export const supplier_schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.string().optional(),
  country: z.string().min(2),
  products: z.array(product_schema),
});
