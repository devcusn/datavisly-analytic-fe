"use client";

import { AuthProvider, useAuth } from "@/context/AuthContext";
import { ReactNode, useEffect } from "react";
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

  useEffect(() => {
    let isMounted = true;

    const initAuth = async () => {
      try {
        const userData = await getCurrentUser();

        if (!isMounted) return;

        if (userData) {
          login(userData);
        } else {
          logout();
        }
      } catch (error) {
        if (!isMounted) return;
        console.error("Error during auth initialization:", error);
        logout();
      }
    };

    initAuth();

    // Cleanup function to prevent updates if component unmounts
    return () => {
      isMounted = false;
    };
  }, [login, logout]); // Empty dependency array - run only once

  return <>{children}</>;
}
