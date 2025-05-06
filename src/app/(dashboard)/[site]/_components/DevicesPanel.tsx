"use client";

interface BrowserItem {
  name: string;
  visitors: string;
  percentage: string;
}

interface DevicesPanelProps {
  devices: BrowserItem[];
}

export default function DevicesPanel({ devices }: DevicesPanelProps) {
  return (
    <div className="bg-gray-800 rounded-md overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Devices</h2>
          {/* <div className="flex text-sm">
            <div className="text-indigo-400 border-b-2 border-indigo-400 px-2">
              Browser
            </div>
            <div className="text-gray-500 border-b-2 border-transparent px-2">
              OS
            </div>
            <div className="text-gray-500 border-b-2 border-transparent px-2">
              Size
            </div>
          </div> */}
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
        {devices.map((browser, index) => (
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
