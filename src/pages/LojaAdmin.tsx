import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { Card } from "../components/ui/Card";
import { ProductCard } from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";
import { fetchProducts, fetchDashboardData } from "../api/mockApi";

export default function LojaAdmin() {
  const { data: products, isLoading: loadingProducts } = useFetch(fetchProducts);
  const { data: stats, isLoading: loadingStats } = useFetch(fetchDashboardData);

  if (loadingProducts || loadingStats)
    return <DashboardLayout title="Loja Admin">Carregando...</DashboardLayout>;

  return (
    <DashboardLayout title="Loja Admin" subtitle="Gerencie sua loja">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Card>Pedidos: {stats?.pedidos}</Card>
        <Card>Vendas: R$ {stats?.vendas}</Card>
        <Card>Clientes: 20</Card>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Produtos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </DashboardLayout>
  );
}
