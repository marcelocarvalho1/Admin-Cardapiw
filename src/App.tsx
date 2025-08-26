import React, { ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import SysAdmin from "./pages/SysAdmin";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// ✅ Proteção de rota
function ProtectedRoute({
  role,
  children,
}: {
  role: "admin" | "sysadmin";
  children: ReactNode;
}) {
  const { user } = useAuth();

  if (user === null) return null; // ou um <Loading />

  if (user.role !== role) return <Navigate to="/login" replace />;

  return <>{children}</>;
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
                <SysAdmin />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
