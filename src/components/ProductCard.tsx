import React from "react";
import { Card } from "./ui/Card";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="flex flex-col items-center justify-center">
      <h2 className="font-bold">{product.name}</h2>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>
    </Card>
  );
};
