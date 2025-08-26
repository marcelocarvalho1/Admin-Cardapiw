import { useState, useEffect } from "react";

interface User {
  username: string;
  role: "sysadmin" | "admin";
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (username: string, password: string) => {
    if (username === "sysadmin" && password === "123") {
      const u: User = { username, role: "sysadmin" };
      setUser(u);
      localStorage.setItem("user", JSON.stringify(u));
      return true;
    } else if (username === "admin" && password === "123") {
      const u: User = { username, role: "admin" };
      setUser(u);
      localStorage.setItem("user", JSON.stringify(u));
      return true;
    }
    return false; // login falhou
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return { user, login, logout };
}
