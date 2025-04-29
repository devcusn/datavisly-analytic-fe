"use client";

import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push("/");
  };
  return (
    <div
      onClick={handleLogout}
      className="px-4 py-3 text-white hover:bg-slate-700 cursor-pointer"
    >
      Log Out
    </div>
  );
}
