import { request } from "../_base";
import { User } from "@/context/AuthContext";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData extends LoginData {
  name: string;
}

// Login user and get user data
export const loginUser = async (loginData: LoginData) => {
  const response = await request.post("/auth/login", loginData);
  return response.data;
};

// Register a new user
export const registerUser = async (registerData: RegisterData) => {
  const response = await request.post("/auth/register", registerData);
  return response.data;
};

// Get current user data
export const getCurrentUser = async () => {
  try {
    const response = await request.get("/auth/me");
    return response.data;
  } catch (error) {
    console.error("Failed to get current user:", error);
    return null;
  }
};

// Update user profile
export const updateUserProfile = async (userData: Partial<User>) => {
  const response = await request.put("/user/profile", userData);
  return response.data;
};

// Logout user
export const logoutUser = async () => {
  try {
    await request.post("/auth/logout");
    return { success: true };
  } catch (error) {
    console.error("Logout error:", error);
    return { success: false };
  }
};
