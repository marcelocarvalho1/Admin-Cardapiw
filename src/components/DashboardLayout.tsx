import React, { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
  onSectionChange?: (section: "dashboard" | "lojistas") => void;
  showProfile?: {
    avatarUrl: string;
    onLogout: () => void;
  };
}

export const DashboardLayout = ({
  title,
  subtitle,
  children,
  onSectionChange,
  showProfile,
}: Props) => (
  <div className="min-h-screen flex bg-gray-100">
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-lg flex flex-col">
      <div className="p-4 font-bold text-xl border-b">Menu</div>
      <ul className="flex-1 p-2">
        <li
          className="p-2 hover:bg-gray-200 rounded cursor-pointer"
          onClick={() => onSectionChange?.("dashboard")}
        >
          Dashboard
        </li>
        <li
          className="p-2 hover:bg-gray-200 rounded cursor-pointer"
          onClick={() => onSectionChange?.("lojistas")}
        >
          Usuários 
        </li>
      </ul>

      {/* Perfil */}
      {showProfile && (
        <div className="p-4 border-t flex items-center gap-3">
          <img
            src={showProfile.avatarUrl}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <button
            onClick={showProfile.onLogout}
            className="text-sm text-red-500 hover:underline"
          >
            Sair
          </button>
        </div>
      )}
    </aside>

    {/* Conteúdo */}
    <main className="flex-1 p-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
      <div>{children}</div>
    </main>
  </div>
);
