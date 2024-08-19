import { db } from "@/lib/db";

export const getSalesData = async () => {
  const data = await db.order.aggregate({
    _sum: { totalPrice: true },
    _count: true,
  });

  // await wait(2000);

  return {
    amount: data._sum.totalPrice || 0,
    numberOfSales: data._count,
  };
};

// function wait(duration: number) {
//   return new Promise((resolve) => setTimeout(resolve, duration));
// }
