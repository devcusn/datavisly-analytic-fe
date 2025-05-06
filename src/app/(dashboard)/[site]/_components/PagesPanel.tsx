"use client";

import { RefreshCw } from "lucide-react";

interface PageView {
  page: string;
  visitors: string | number;
}

interface PagesPanelProps {
  pages: PageView[] | undefined;
}

export default function PagesPanel({ pages }: PagesPanelProps) {
  return (
    <div className="bg-gray-800 rounded-md overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Pages</h2>
          <div className="flex text-sm">
            <div className="hidden text-indigo-400 border-b-2 border-indigo-400 px-2">
              Top Pages
            </div>
            <div className="hidden text-gray-500 border-b-2 border-transparent px-2">
              Entry Pages
            </div>
            <div className="hidden text-gray-500 border-b-2 border-transparent px-2">
              Exit Pages
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
          <div>Page</div>
          <div>Visitors</div>
        </div>
        {pages?.map((page, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 text-sm"
          >
            <div className="truncate max-w-md">{page.page}</div>
            <div className="font-medium">{page.visitors}</div>
          </div>
        ))}
        <div className="mt-4 text-center">
          <button className="text-indigo-400 text-sm hover:text-indigo-300 inline-flex items-center">
            <RefreshCw size={14} className="mr-1" /> DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}
