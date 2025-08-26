import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import SysAdminDashboard from "./pages/SysAdmin";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Componente de rota protegida
function ProtectedRoute({
  role,
  children,
}: {
  role: "admin" | "sysadmin";
  children: JSX.Element;
}) {
  const { user } = useAuth();

  // Enquanto o user ainda não carregou, retorna null (ou loading)
  if (user === null) return null;

  // Se role não corresponde, redireciona para login
  if (user.role !== role) return <Navigate to="/login" replace />;

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin/*"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/sysadmin/*"
            element={
              <ProtectedRoute role="sysadmin">
                <SysAdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Redireciona qualquer outra rota para login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
