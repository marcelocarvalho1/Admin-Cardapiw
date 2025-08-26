import React, { ReactNode } from "react";
import { ProfileMenu } from "./ProfileMenu";

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const DashboardLayout = ({ title, subtitle, children }: Props) => (
  <div className="min-h-screen flex bg-gray-100">
    <aside className="w-64 bg-white shadow-lg p-4">
      <h2 className="font-bold text-xl mb-4">Menu</h2>
      <ul>
        <li className="p-2 hover:bg-gray-200 rounded cursor-pointer">Dashboard</li>
        <li className="p-2 hover:bg-gray-200 rounded cursor-pointer">Lojas</li>
        <li className="p-2 hover:bg-gray-200 rounded cursor-pointer">Pedidos</li>
      </ul>
    </aside>
    <main className="flex-1 p-6 flex flex-col">
      {/* Cabeçalho com título e perfil */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
        <ProfileMenu />
      </div>

      {/* Conteúdo */}
      <div>{children}</div>
    </main>
  </div>
);
