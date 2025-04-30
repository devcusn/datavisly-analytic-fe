"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="max-w-6xl mx-auto px-4 ">
      <div className="mb-8">
        <Link href="/sites" className="text-indigo-400 flex items-center mb-2">
          <span className="mr-2">←</span> Back to Sites
        </Link>
        <h1 className="text-3xl font-bold">Settings</h1>
        <div className="border-b border-gray-700 mt-4 mb-6"></div>
      </div>

      <div className="flex lg:flex-row gap-6">
        <div className="flex flex-col w-full lg:w-1/4">
          <div className="text-indigo-400 mb-2 text-sm">ACCOUNT SETTINGS</div>

          <Link
            href={"/settings/profile"}
            className={`py-2 px-4 mb-2 text-gray-400 ${
              pathname === "/settings/profile" ? "bg-gray-800/50" : ""
            }`}
          >
            profile
          </Link>
          <Link
            href={"/settings/security"}
            className={`py-2 px-4 mb-2 text-gray-400 ${
              pathname === "/settings/security" ? "bg-gray-800/50" : ""
            }`}
          >
            Security
          </Link>
          <Link
            href={"/settings/danger-zone"}
            className={`py-2 px-4 mb-2 text-gray-400 ${
              pathname === "/settings/danger-zone" ? "bg-gray-800/50" : ""
            }`}
          >
            Danger Zone
          </Link>
        </div>
        <div className="w-full lg:w-3/4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
