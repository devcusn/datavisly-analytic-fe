"use client";
import { getWebsSites } from "@/services/website/endpoints";
import Link from "next/link";
import { useEffect, useState } from "react";

const SitesPage = () => {
  const [sites, setSites] = useState<
    Array<{ id: string; domain: string; name: string }>
  >([]);

  const getWebsitesHandler = async () => {
    const websites = await getWebsSites();

    setSites(websites);
  };

  useEffect(() => {
    getWebsitesHandler();
  }, []);

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-8">
      {/* My  Sites header area */}
      <div className="flex flex-col w-full mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">My Sites</h1>
        <div className="h-px w-full bg-gray-700 mb-6"></div>

        <div className="flex justify-between items-center w-full">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              {/* <Search className="h-4 w-4 text-gray-400" /> */}
            </div>
            <input
              type="text"
              placeholder="Press / to search sites"
              className="bg-gray-800 text-gray-300 pl-10 pr-4 py-2 rounded-md w-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Link
            href={"/sites/setup"}
            className="bg-[#ff6100] cursor-pointer hover:bg-orange-700 text-white px-4 py-2 rounded-md flex items-center"
          >
            <span className="mr-1">+</span>
            Add Website
          </Link>
        </div>
      </div>

      {/* Site list area */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {sites.map((site) => (
          <Link
            href={`${site.domain}`}
            key={site.id}
            className="bg-gray-800 rounded-md hover:bg-gray-750 p-4 transition duration-200"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="h-5  text-gray-400 ">
                <span className="text-white font-medium">{site.name}</span>
              </div>
              <button className="text-gray-400 hover:text-white">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="6" r="2" fill="currentColor" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="12" cy="18" r="2" fill="currentColor" />
                </svg>
              </button>
            </div>
            <p>{site.domain}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SitesPage;
