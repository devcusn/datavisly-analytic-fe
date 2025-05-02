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

// Component to initialize auth state on app load
function AuthInitializer({ children }: { children: ReactNode }) {
  const { login, logout } = useAuth();
  const initAuth = useCallback(async () => {
    try {
      // Try to fetch current user using auth cookie
      const userData = await getCurrentUser();

      if (userData) {
        // If user data exists, update context
        login(userData);
      } else {
        // If no user data, clear any stale state
        logout();
      }
    } catch (error) {
      console.error("Error during auth initialization:", error);
      // On error, clear auth state to be safe
      logout();
    }
  }, [login, logout]);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return <>{children}</>;
}
