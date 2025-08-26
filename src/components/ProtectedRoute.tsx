import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  role: "admin" | "sysadmin";
  children: JSX.Element;
}

export const ProtectedRoute = ({ role, children }: Props) => {
  const { user } = useAuth();


  if (user === null) return null;

  if (user.role !== role) return <Navigate to="/login" replace />;

  return children;
};
