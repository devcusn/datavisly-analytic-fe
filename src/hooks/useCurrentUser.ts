"use client";

import { useAuth, User } from "@/context/AuthContext";
import { useMemo } from "react";

interface UseCurrentUserReturn {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

/**
 * Custom hook to access the current user state and authentication methods
 *
 * @example
 * const { user, isLoggedIn, logout } = useCurrentUser();
 *
 * if (isLoggedIn) {
 *   console.log(`Hello, ${user?.name}`);
 * }
 */
export default function useCurrentUser(): UseCurrentUserReturn {
  const { user, loading, login, logout, updateUser } = useAuth();

  // Use useMemo to prevent unnecessary re-renders
  return useMemo(
    () => ({
      user,
      isLoggedIn: !!user,
      isLoading: loading,
      login,
      logout,
      updateUser,
    }),
    [user, loading, login, logout, updateUser]
  );
}
