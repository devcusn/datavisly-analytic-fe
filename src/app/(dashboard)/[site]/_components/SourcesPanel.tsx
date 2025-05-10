"use client";

import { RefreshCw } from "lucide-react";

interface SourceItem {
  name: string;
  visitors: number;
}

interface SourcesPanelProps {
  sources: SourceItem[];
}

export default function SourcesPanel({ sources }: SourcesPanelProps) {
  return (
    <div className="bg-gray-800 rounded-md overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Top Sources</h2>
          <div className="flex text-sm">
            <div className="hidden text-gray-500 border-b-2 border-transparent px-2">
              Channels
            </div>
            <div className="hidden text-indigo-400 border-b-2 border-indigo-400 px-2">
              Sources
            </div>
            <div className="hidden text-gray-500 border-b-2 border-transparent px-2">
              Campaigns
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
          <div>Source</div>
          <div>Visitors</div>
        </div>
        {sources.map((source, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 text-sm"
          >
            <div className="flex items-center">
              <span>{source.name}</span>
            </div>
            <div className="font-medium">{source.visitors}</div>
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
