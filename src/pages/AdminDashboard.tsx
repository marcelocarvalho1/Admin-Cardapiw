import React, { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { useAuth } from "../contexts/AuthContext";
import { Card } from "../components/ui/Card";

export default function AdminDashboard() {
  const { logout, user } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    setLoadingLogout(true);
    setTimeout(() => {
      logout();
      window.location.href = "/login";
    }, 1500);
  };

  return (
    <>
      <DashboardLayout
        title="Admin Dashboard"
        subtitle={`Bem-vindo, ${user?.username || "Admin"}`}
        showProfile={{
          avatarUrl: "https://i.pravatar.cc/100",
          onLogout: handleLogoutClick,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card>Lojas: 10</Card>
          <Card>Pedidos: 20</Card>
          <Card>Vendas: R$ 5.000</Card>
        </div>
      </DashboardLayout>
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            {loadingLogout ? (
              <>
                <p className="mb-4 text-lg font-medium">Saindo do sistema...</p>
                <div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-8 h-8 mx-auto"></div>
              </>
            ) : (
              <>
                <p className="mb-4 text-lg font-medium">
                  Deseja realmente sair do sistema?
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleConfirmLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Confirmar
                  </button>
                  <button
                    onClick={() => setShowLogoutModal(false)}
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancelar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
