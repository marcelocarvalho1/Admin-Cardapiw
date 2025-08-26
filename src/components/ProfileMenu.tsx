import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const ProfileMenu = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoading(true); // mostra loading
    setTimeout(() => { // simula tempo de processamento
      logout();
      console.log("Você saiu do sistema");
      setLoading(false);
      setShowModal(false);
      navigate("/login");
    }, 1000); // 1 segundo de delay
  };

  return (
    <div className="relative ml-auto">
      {/* Botão de perfil */}
      <button
        className="flex items-center space-x-2"
        onClick={() => setOpen(!open)}
      >
        <img
          src={`https://ui-avatars.com/api/?name=${user?.username || "Usuário"}&background=0D8ABC&color=fff&rounded=true`}
          alt="Perfil"
          className="w-10 h-10 rounded-full"
        />
        <span className="hidden md:inline text-gray-700 font-medium">{user?.username}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded border border-gray-200 z-10">
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => alert("Configurações (implementar depois)")}
          >
            Configurações
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => setShowModal(true)}
          >
            Sair
          </button>
        </div>
      )}

      {/* Modal de confirmação de logout */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center">
            {loading ? (
              <div className="flex flex-col items-center">
                <div className="loader mb-2"></div>
                <span>Saindo...</span>
              </div>
            ) : (
              <>
                <p className="mb-4">Deseja realmente sair?</p>
                <div className="flex justify-between">
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    onClick={handleLogout}
                  >
                    Sair
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Loader styling */}
      <style>{`
        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
