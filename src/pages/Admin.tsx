import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function Admin() {
  return (
    <DashboardLayout title="Admin" subtitle="Painel do lojista">
      <div className="p-4 text-center text-gray-600">
        Painel Admin – Aqui você verá pedidos e produtos da sua loja.
      </div>
    </DashboardLayout>
  );
}
