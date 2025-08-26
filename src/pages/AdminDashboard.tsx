import React from "react";
import  {DashboardLayout}  from "../components/DashboardLayout";
import { Card } from "../components/ui/Card";
import { useFetch } from "../hooks/useFetch";
import { fetchDashboardData } from "../api/mockApi";

export default function AdminDashboard() {
  const { data, isLoading } = useFetch(fetchDashboardData);

  if (isLoading)
    return <DashboardLayout title="Admin Dashboard">Carregando...</DashboardLayout>;

  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Card>Lojas: {data?.lojas}</Card>
        <Card>Pedidos: {data?.pedidos}</Card>
        <Card>Vendas: R$ {data?.vendas}</Card>
      </div>
    </DashboardLayout>
  );
}
