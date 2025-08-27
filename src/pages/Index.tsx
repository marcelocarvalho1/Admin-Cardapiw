import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300">
      <DashboardLayout title="Bem-vindo" subtitle="Escolha uma seção no menu">
        {/* Conteúdo principal */}
        <div className="text-gray-500 text-center p-6 bg-gray-100 rounded">
          Aqui você verá informações relevantes do seu painel.
        </div>
      </DashboardLayout>
    </div>
  );
}
