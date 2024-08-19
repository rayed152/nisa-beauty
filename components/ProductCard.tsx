import { formatCurrency } from "@/lib/formatters";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/virtual";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export default function ProductCard({
  id,
  name,
  price,
  description,
  imageUrl,
}: ProductCardProps) {
  return (
    <Card className="flex overflow-hidden flex-col transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
      <div className="relative w-full h-auto aspect-video">
        <Image
          src={imageUrl}
          fill
          alt={name}
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold transition-colors duration-300 hover:text-blue-500">
          {name}
        </CardTitle>
        <CardDescription className="text-gray-700 transition-colors duration-300 hover:text-blue-400">
          {formatCurrency(price)}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-4 transition-opacity duration-300 hover:opacity-80">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild size="lg" className="w-full">
          <Link
            href={`/products/${id}/purchase`}
            className="text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            Purchase
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
