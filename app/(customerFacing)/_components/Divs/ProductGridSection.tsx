import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type PopularProductProps = {
  title: string;
  productFetcher: () => Promise<Product[]>;
};

export default async function ProductGridSection({
  productFetcher,
  title,
}: PopularProductProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Button asChild variant="outline">
          <Link href="/products" className="space-x-2">
            <span>View All</span>
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {(await productFetcher()).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
