"use client";

import { MapPin } from "lucide-react";

export default function LocationsPanel() {
  return (
    <div className="bg-gray-800 rounded-md overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Locations</h2>
          <div className="flex text-sm">
            <div className="text-indigo-400 border-b-2 border-indigo-400 px-2">
              Map
            </div>
            <div className="text-gray-500 border-b-2 border-transparent px-2">
              Countries
            </div>
            <div className="text-gray-500 border-b-2 border-transparent px-2">
              Regions
            </div>
            <div className="text-gray-500 border-b-2 border-transparent px-2">
              Cities
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-gray-900 rounded-md h-64 flex items-center justify-center">
          <MapPin size={64} className="text-indigo-400 opacity-20" />
        </div>
      </div>
    </div>
  );
}
