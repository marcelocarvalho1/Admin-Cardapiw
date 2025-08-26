import React, { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { useAuth } from "../contexts/AuthContext";
import { Card } from "../components/ui/Card";

export default function AdminDashboard() {
  const { logout, user } = useAuth();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);

  const [profileData, setProfileData] = useState({
    nomeLoja: "Minha Loja",
    email: "loja@email.com",
    avatarUrl: "https://i.pravatar.cc/100",
  });

  const handleLogoutClick = () => setShowLogoutModal(true);
  const handleConfirmLogout = () => {
    setLoadingLogout(true);
    setTimeout(() => {
      logout();
      console.info("Você saiu do sistema");
      window.location.href = "/login";
    }, 1500);
  };

  const handleProfileSave = () => {
    console.log("Salvou perfil:", profileData);
    setShowProfileModal(false);
  };

  return (
    <>
      <DashboardLayout
        title="Admin Dashboard"
        subtitle={`Bem-vindo, ${user?.username || "Admin"}`}
        showProfile={{
          avatarUrl: profileData.avatarUrl,
          onProfile: () => setShowProfileModal(true),
          onLogout: handleLogoutClick,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card>Lojas: 10</Card>
          <Card>Pedidos: 20</Card>
          <Card>Vendas: R$ 5.000</Card>
        </div>
      </DashboardLayout>

      {/* Modal de Configurações de perfil */}
      {showProfileModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Configurações de perfil</h2>

            <label className="block mb-2">
              Nome da loja
              <input
                type="text"
                className="border w-full p-2 rounded mt-1"
                value={profileData.nomeLoja}
                onChange={(e) =>
                  setProfileData({ ...profileData, nomeLoja: e.target.value })
                }
              />
            </label>

            <label className="block mb-2">
              Email
              <input
                type="email"
                className="border w-full p-2 rounded mt-1"
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({ ...profileData, email: e.target.value })
                }
              />
            </label>

            <label className="block mb-4">
              Avatar URL
              <input
                type="text"
                className="border w-full p-2 rounded mt-1"
                value={profileData.avatarUrl}
                onChange={(e) =>
                  setProfileData({ ...profileData, avatarUrl: e.target.value })
                }
              />
            </label>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowProfileModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleProfileSave}
                className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de logout */}
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
