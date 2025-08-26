import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { Card } from "../components/ui/Card";

export default function LojaAdmin() {
  return (
    <DashboardLayout title="Loja Admin" subtitle="Gerencie sua loja">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-4">Produtos</Card>
        <Card className="p-4">Pedidos</Card>
        <Card className="p-4">Clientes</Card>
      </div>
    </DashboardLayout>
  );
}
