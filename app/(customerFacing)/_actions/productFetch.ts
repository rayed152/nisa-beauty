"use server";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";

export async function getMostPopularProducts(): Promise<Product[]> {
  try {
    const products = await db.product.findMany({
      where: {
        isAvailableForPurchase: true,
      },
      orderBy: {
        orders: { _count: "desc" },
      },
      take: 3,
    });
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getNewestProducts(): Promise<Product[]> {
  try {
    const products = await db.product.findMany({
      where: {
        isAvailableForPurchase: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    });
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}
