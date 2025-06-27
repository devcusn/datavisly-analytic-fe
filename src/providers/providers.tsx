"use client";

import { AuthProvider, useAuth } from "@/context/AuthContext";
import { ReactNode, useCallback, useEffect } from "react";
import { getCurrentUser } from "@/services/user/endpoints";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <AuthInitializer>{children}</AuthInitializer>
    </AuthProvider>
  );
}

function AuthInitializer({ children }: { children: ReactNode }) {
  const { login, logout } = useAuth();
  const initAuth = useCallback(async () => {
    try {
      const userData = await getCurrentUser();

      if (userData) {
        login(userData);
      } else {
        logout();
      }
    } catch (error) {
      console.error("Error during auth initialization:", error);
      logout();
    }
  }, [login, logout]);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return <>{children}</>;
}
