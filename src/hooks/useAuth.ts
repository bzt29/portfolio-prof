"use client";

import { useState, useCallback } from "react";

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: "admin" | "visitor";
}

export function useAuth() {
  const [user, setUser] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(async (email: string) => {
    setLoading(true);
    try {
      // Demo simulated authentication
      await new Promise((resolve) => setTimeout(resolve, 500));
      setUser({
        id: "usr_hafiz_dev",
        name: "S. M. Hafiz F. Syed",
        email,
        role: "admin",
      });
      return true;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return {
    user,
    isAuthenticated: Boolean(user),
    loading,
    login,
    logout,
  };
}
