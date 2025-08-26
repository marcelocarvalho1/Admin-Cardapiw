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

export const ProductCard = ({ product }: ProductCardProps) => (
  <Card className="flex flex-col items-center justify-center p-4">
    <h2 className="font-bold">{product.name}</h2>
    <p className="text-gray-500">R$ {product.price.toFixed(2)}</p>
    <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
      Adicionar
    </button>
  </Card>
);
