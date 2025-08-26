import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { Card } from "../components/ui/Card";
import { useFetch } from "../hooks/useFetch";
import { fetchSysAdminData } from "../api/mockApi";

export default function SysAdminDashboard() {
  const { data, isLoading } = useFetch(fetchSysAdminData);

  if (isLoading)
    return <DashboardLayout title="SysAdmin Dashboard">Carregando...</DashboardLayout>;

  return (
    <DashboardLayout title="SysAdmin Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Card>Usuários: {data?.usuarios}</Card>
        <Card>Lojas Ativas: {data?.lojasAtivas}</Card>
        <Card>Pedidos Totais: {data?.pedidosTotais}</Card>
      </div>
    </DashboardLayout>
  );
}
