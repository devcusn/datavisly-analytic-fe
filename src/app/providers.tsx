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
        // Try to fetch current user using auth cookie
        const userData = await getCurrentUser();

        // Prevent state updates if component unmounted
        if (!isMounted) return;

        if (userData) {
          // If user data exists, update context
          login(userData);
        } else {
          // If no user data, clear any stale state
          logout();
        }
      } catch (error) {
        if (!isMounted) return;
        console.error("Error during auth initialization:", error);
        // On error, clear auth state to be safe
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
