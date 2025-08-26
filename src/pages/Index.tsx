import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function Index() {
  return (
    <DashboardLayout title="Bem-vindo" subtitle="Escolha uma seção no menu">
      <div className="text-gray-500 text-center p-6">
        Aqui você verá informações relevantes do seu painel.
      </div>
    </DashboardLayout>
  );
}
