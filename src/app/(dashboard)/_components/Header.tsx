"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/img/logo.svg";
import Link from "next/link";
import LogoutButton from "./LogutButton";
import useCurrentUser from "@/hooks/useCurrentUser";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { user } = useCurrentUser();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-6xl flex items-center mx-auto justify-between py-6 text-white">
      <Link href="/">
        <div className="flex items-center text-2xl font-bold cursor-pointer gap-2">
          <Image height={35} src={Logo} alt="logo" />
        </div>
      </Link>

      <div className="flex gap-4 relative text-sm" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="shadow border border-gray-600 px-8 py-2 text-sm text-white font-semibold rounded hover:bg-gray-600 cursor-pointer"
        >
          {user?.name}
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-12 w-48 bg-slate-800 rounded shadow-lg py-1 z-10 border border-slate-700">
            <div className="px-4 py-3 border-b border-slate-700">
              <p className="text-sm text-slate-400">Signed in as</p>
              <span>{user?.email}</span>
            </div>

            <Link href="/settings">
              <div className="px-4 py-3 text-white hover:bg-slate-700 cursor-pointer">
                Account Settings
              </div>
            </Link>

            <div className="border-t border-slate-700">
              <LogoutButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
