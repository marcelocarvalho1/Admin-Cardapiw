import React, { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { useAuth } from "../contexts/AuthContext";
import { LojistasPage } from "./sysadmin/LojistaPage";

export default function SysAdmin() {
  const { logout } = useAuth();
  const [section, setSection] = useState<"dashboard" | "lojistas">("dashboard");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    setLoadingLogout(true);
    setTimeout(() => {
      logout();
      console.info("Você saiu do sistema");
      window.location.href = "/login";
    }, 1500);
  };

  return (
    <>
      <DashboardLayout
        title="SysAdmin"
        subtitle="Painel de controle do sistema"
        onSectionChange={setSection}
        showProfile={{
          avatarUrl: "https://i.pravatar.cc/100",
          onLogout: handleLogoutClick,
        }}
      >
        {section === "dashboard" && (
          <div>📊 Bem-vindo ao painel do SysAdmin!</div>
        )}
        {section === "lojistas" && <LojistasPage />}
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
