import React, { ReactNode, useState } from "react";

interface ProfileMenuProps {
  avatarUrl: string;
  onProfile?: () => void;
  onLogout: () => void;
}

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
  onSectionChange?: (section: "dashboard" | "lojistas") => void;
  showProfile?: ProfileMenuProps;
}

export const DashboardLayout = ({
  title,
  subtitle,
  children,
  onSectionChange,
  showProfile,
}: Props) => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      <aside className="w-64 p-4 flex flex-col justify-between bg-white shadow-lg">
        <div>
          <h2 className="font-bold text-xl mb-4">Menu</h2>
          <ul>
            <li
              className="p-2 rounded cursor-pointer hover:bg-gray-200"
              onClick={() => onSectionChange && onSectionChange("dashboard")}
            >
              Dashboard
            </li>
            <li
              className="p-2 rounded cursor-pointer hover:bg-gray-200"
              onClick={() => onSectionChange && onSectionChange("lojistas")}
            >
              Lojistas
            </li>
          </ul>
        </div>

        {showProfile && (
          <div className="relative mt-4">
            <img
              src={showProfile.avatarUrl}
              alt="Avatar"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setOpenProfileMenu(!openProfileMenu)}
            />

            {openProfileMenu && (
              <div className="absolute bottom-12 left-0 w-48 z-50 rounded p-2 bg-white shadow-lg">
                <button
                  className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100"
                  onClick={() => {
                    setOpenProfileMenu(false);
                    showProfile.onProfile?.();
                  }}
                >
                  Configurações de perfil
                </button>
                <button
                  className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100"
                  onClick={showProfile.onLogout}
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        )}
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
        <div>{children}</div>
      </main>
    </div>
  );
};
