import { db } from "@/lib/db";

export default async function getProductData() {
  const [activeCount, inactiveCount] = await Promise.all([
    db.product.count({
      where: { isAvailableForPurchase: true },
    }),
    db.product.count({
      where: { isAvailableForPurchase: false },
    }),
  ]);

  return { activeCount, inactiveCount };
}
