import { db } from "@/lib/db";

export async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    db.user.count(),
    db.order.aggregate({
      _sum: { totalPrice: true },
    }),
  ]);

  return {
    userCount,
    avarageValuePerUser:
      userCount === 0 ? 0 : (orderData._sum.totalPrice || 0) / userCount,
  };
}
