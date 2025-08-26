import React, { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { useAuth } from "../contexts/AuthContext";
import { LojistasPage } from "./sysadmin/LojistaPage";

export default function SysAdmin() {
  const { logout, user } = useAuth();
  const [section, setSection] = useState<"dashboard" | "lojistas">("dashboard");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const [profileData, setProfileData] = useState({
    nomeAdmin: user?.username || "SysAdmin",
    email: "sysadmin@email.com",
    avatarUrl: "https://i.pravatar.cc/100",
  });

  // Logout
  const handleLogoutClick = () => setShowLogoutModal(true);
  const handleConfirmLogout = () => {
    setLoadingLogout(true);
    setTimeout(() => {
      logout();
      console.info("Você saiu do sistema");
      window.location.href = "/login";
    }, 1500);
  };

  // Salvar perfil
  const handleProfileSave = () => {
    console.log("Perfil salvo:", profileData);
    setShowProfileModal(false);
  };

  return (
    <>
      <DashboardLayout
        title="SysAdmin"
        subtitle="Painel de controle do sistema"
        onSectionChange={setSection}
        showProfile={{
          avatarUrl: profileData.avatarUrl,
          onProfile: () => setShowProfileModal(true),
          onLogout: handleLogoutClick,
        }}
      >
        {section === "dashboard" && (
          <div className="p-4 text-center">📊 Bem-vindo ao painel do SysAdmin!</div>
        )}
        {section === "lojistas" && <LojistasPage />}
      </DashboardLayout>

      {/* Modal de Configurações de Perfil */}
      {showProfileModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Configurações de perfil</h2>

            <label className="block mb-2">
              Nome do Admin
              <input
                type="text"
                className="border w-full p-2 rounded mt-1"
                value={profileData.nomeAdmin}
                onChange={(e) =>
                  setProfileData({ ...profileData, nomeAdmin: e.target.value })
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

      {/* Modal de Logout */}
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
