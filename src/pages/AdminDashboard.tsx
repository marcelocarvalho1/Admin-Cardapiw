import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { Card } from "../components/ui/Card";

export default function AdminDashboard() {
  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Card>Lojas: 10</Card>
        <Card>Pedidos: 20</Card>
        <Card>Vendas: R$ 5.000</Card>
      </div>
    </DashboardLayout>
  );
}
