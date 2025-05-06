"use client";

interface BrowserItem {
  name: string;
  visitors: string;
  percentage: string;
}

interface DevicesPanelProps {
  browsers: BrowserItem[];
}

export default function BrowserPanel({ browsers }: DevicesPanelProps) {
  return (
    <div className="bg-gray-800 rounded-md overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Browser</h2>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
          <div>Browser</div>
          <div className="flex items-center">
            <span className="mr-6">Visitors</span>
            <span>%</span>
          </div>
        </div>
        {browsers.map((browser, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 text-sm"
          >
            <div className="flex items-center">
              <span>{browser.name}</span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="font-medium w-16 text-right">
                {browser.visitors}
              </span>
              <span className="text-gray-400 w-16 text-right">
                {browser.percentage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
