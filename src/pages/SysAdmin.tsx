import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { Card } from "../components/ui/Card";

export default function SysAdminDashboard() {
  return (
    <DashboardLayout title="SysAdmin Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Card>Usuários: 5</Card>
        <Card>Lojas Ativas: 10</Card>
        <Card>Pedidos Totais: 100</Card>
      </div>
    </DashboardLayout>
  );
}

