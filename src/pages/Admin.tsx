import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { Card } from "../components/ui/Card";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/mockData";

export default function LojaAdmin() {
  return (
    <DashboardLayout title="Loja Admin" subtitle="Gerencie sua loja">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Card className="p-4">Pedidos: 12</Card>
        <Card className="p-4">Vendas: R$ 4.500</Card>
        <Card className="p-4">Clientes: 20</Card>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Produtos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </DashboardLayout>
  );
}
