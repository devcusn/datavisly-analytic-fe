"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowUp, ArrowDown, RefreshCw, MapPin } from "lucide-react";
import { useEffect, useState, useRef } from "react";

import { AnalyticResult, getAnalytic } from "@/services/analytic/endpoints";

interface SiteData {
  id: string;
  name: string;
  url: string;
  domain: string;
}

interface AnalyticsClientProps {
  siteData: SiteData;
}

export default function AnalyticsClient({ siteData }: AnalyticsClientProps) {
  console.log("Site details:", siteData);
  const [data, setData] = useState<AnalyticResult>();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("Today");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getAnalytic(siteData.domain).then((res) => {
      setData(res);
    });
  }, [siteData.domain]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "d" || event.key === "D") {
        handleRangeSelect("Today");
      } else if (event.key === "e" || event.key === "E") {
        handleRangeSelect("Yesterday");
      } else if (event.key === "r" || event.key === "R") {
        handleRangeSelect("Realtime");
      } else if (event.key === "w" || event.key === "W") {
        handleRangeSelect("Last 7 Days");
      } else if (event.key === "f" || event.key === "F") {
        handleRangeSelect("Last 28 Days");
      } else if (event.key === "n" || event.key === "N") {
        handleRangeSelect("Last 91 Days");
      } else if (event.key === "m" || event.key === "M") {
        handleRangeSelect("Month to Date");
      } else if (event.key === "p" || event.key === "P") {
        handleRangeSelect("Last Month");
      } else if (event.key === "y" || event.key === "Y") {
        handleRangeSelect("Year to Date");
      } else if (event.key === "l" || event.key === "L") {
        handleRangeSelect("Last 12 Months");
      } else if (event.key === "a" || event.key === "A") {
        handleRangeSelect("All time");
      } else if (event.key === "c" || event.key === "C") {
        handleRangeSelect("Custom Range");
      } else if (event.key === "x" || event.key === "X") {
        handleRangeSelect("Compare");
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleRangeSelect = (range: string) => {
    setSelectedRange(range);
    setDropdownOpen(false);
  };

  const chartData = [
    { name: "25 Mar", value: 6000 },
    { name: "30 Apr", value: 12000 },
    { name: "1 Apr", value: 10000 },
    { name: "4 Apr", value: 14000 },
    { name: "9 Apr", value: 7000 },
    { name: "14 Apr", value: 11000 },
    { name: "18 Apr", value: 9000 },
  ];

  const metricCards = [
    {
      title: "UNIQUE VISITORS",
      value: "140",
      change: "-6%",
      direction: "up",
    },
    { title: "TOTAL VISITS", value: "123", change: "-3%", direction: "down" },
    { title: "TOTAL PAGEVIEWS", value: "0.5M", change: "8%", direction: "up" },
    {
      title: "VIEWS PER VISIT",
      value: "3.16",
      change: "-5%",
      direction: "down",
    },
    { title: "BOUNCE RATE", value: "32%", change: "0%", direction: "neutral" },
    { title: "VISIT DURATION", value: "6m 12s", change: "1%", direction: "up" },
  ];

  const sources = [
    { name: "Direct / None", icon: "🔗", visitors: "218k" },
    { name: "GitHub", icon: "🐙", visitors: "1.4k" },
    { name: "DuckDuckGo", icon: "🦆", visitors: "666" },
    { name: "Bing", icon: "🔎", visitors: "541" },
    { name: "Reddit", icon: "🤖", visitors: "535" },
    { name: "Google", icon: "🔍", visitors: "17.9k" },
    { name: "docenten.dk", icon: "📄", visitors: "4.3k" },
    { name: "chatgpt.com", icon: "💬", visitors: "2.3k" },
    { name: "metisprivatist.no", icon: "🔵", visitors: "1.4k" },
  ];

  const pages = data?.page_views;
  const browsers = [
    { name: "Chrome", icon: "🌐", visitors: "150k", percentage: "59.3%" },
    { name: "Safari", icon: "🌐", visitors: "70.5k", percentage: "27.8%" },
    { name: "Firefox", icon: "🦊", visitors: "14.8k", percentage: "5.9%" },
    { name: "Microsoft Edge", icon: "🌐", visitors: "10.1k", percentage: "4%" },
    { name: "Mobile App", icon: "📱", visitors: "3k", percentage: "1.2%" },
    { name: "not set", icon: "❓", visitors: "2k", percentage: "0.8%" },
    { name: "Opera", icon: "🌐", visitors: "1.2k", percentage: "0.5%" },
  ];

  return (
    <div className="bg-gray-900">
      <div className="w-9/12 mx-auto text-gray-100 min-h-screen">
        {/* Main Content */}
        <div className="p-6">
          {/* Metrics */}
          <div className="flex items-center pb-6">
            <div className="font-semibold text-md">{siteData.domain}</div>
            <div className="flex min-w-fit items-center gap-1 text-green-500 ml-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <div className="text-sm font-extrabold">89 current visitors</div>
            </div>
            <div className="flex items-center gap-4 w-full justify-end">
              <div className="relative" ref={dropdownRef}>
                <button
                  className="bg-gray-800 pl-4 pr-8 py-2 rounded-md flex items-center justify-between min-w-[200px]"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {selectedRange}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 absolute right-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg">
                    <div
                      className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
                      onClick={() => handleRangeSelect("Today")}
                    >
                      <span>Today</span>
                      <span className="text-gray-500">D</span>
                    </div>
                    <div
                      className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
                      onClick={() => handleRangeSelect("Yesterday")}
                    >
                      <span>Yesterday</span>
                      <span className="text-gray-500">E</span>
                    </div>
                    <div
                      className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
                      onClick={() => handleRangeSelect("Realtime")}
                    >
                      <span>Realtime</span>
                      <span className="text-gray-500">R</span>
                    </div>
                    <div className="border-t border-gray-700 my-1"></div>
                    <div
                      className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
                      onClick={() => handleRangeSelect("Last 7 Days")}
                    >
                      <span>Last 7 Days</span>
                      <span className="text-gray-500">W</span>
                    </div>
                    <div
                      className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
                      onClick={() => handleRangeSelect("Last 28 Days")}
                    >
                      <span>Last 28 Days</span>
                      <span className="text-gray-500">F</span>
                    </div>
                    <div
                      className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
                      onClick={() => handleRangeSelect("Last 91 Days")}
                    >
                      <span>Last 91 Days</span>
                      <span className="text-gray-500">N</span>
                    </div>
                    <div className="border-t border-gray-700 my-1"></div>
                    <div
                      className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
                      onClick={() => handleRangeSelect("Month to Date")}
                    >
                      <span>Month to Date</span>
                      <span className="text-gray-500">M</span>
                    </div>
                    <div
                      className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
                      onClick={() => handleRangeSelect("Last Month")}
                    >
                      <span>Last Month</span>
                      <span className="text-gray-500">P</span>
                    </div>
                    <div className="border-t border-gray-700 my-1"></div>
                    <div
                      className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
                      onClick={() => handleRangeSelect("Year to Date")}
                    >
                      <span>Year to Date</span>
                      <span className="text-gray-500">Y</span>
                    </div>
                    <div
                      className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
                      onClick={() => handleRangeSelect("Last 12 Months")}
                    >
                      <span>Last 12 Months</span>
                      <span className="text-gray-500">L</span>
                    </div>
                    <div className="border-t border-gray-700 my-1"></div>
                    <div
                      className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
                      onClick={() => handleRangeSelect("All time")}
                    >
                      <span>All time</span>
                      <span className="text-gray-500">A</span>
                    </div>
                    <div
                      className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
                      onClick={() => handleRangeSelect("Custom Range")}
                    >
                      <span>Custom Range</span>
                      <span className="text-gray-500">C</span>
                    </div>
                    <div className="border-t border-gray-700 my-1"></div>
                    <div
                      className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
                      onClick={() => handleRangeSelect("Compare")}
                    >
                      <span>Compare</span>
                      <span className="text-gray-500">X</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 mb-8">
            {metricCards.map((card, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-md">
                <div className="text-xs text-gray-500 mb-1">{card.title}</div>
                <div className="flex items-center">
                  <div className="text-2xl font-semibold">{card.value}</div>
                  <div
                    className={`ml-2 text-sm flex items-center ${
                      card.direction === "up"
                        ? "text-green-500"
                        : card.direction === "down"
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    {card.direction === "up" && <ArrowUp size={14} />}
                    {card.direction === "down" && <ArrowDown size={14} />}
                    {card.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div className="bg-gray-800 p-4 rounded-md mb-8">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="name" stroke="#4b5563" />
                  <YAxis stroke="#4b5563" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      borderColor: "#374151",
                    }}
                    itemStyle={{ color: "#f3f4f6" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#818cf8"
                    activeDot={{ r: 8 }}
                    dot={false}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Sources and Pages */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Sources */}
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
                      <span className="mr-2">{source.icon}</span>
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

            {/* Pages */}
            <div className="bg-gray-800 rounded-md overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium"> Pages</h2>
                  <div className="flex text-sm">
                    <div className="hidden text-indigo-400 border-b-2 border-indigo-400 px-2">
                      Top Pages
                    </div>
                    <div className="hidden text-gray-500 border-b-2 border-transparent px-2">
                      Entry Pages
                    </div>
                    <div className=" hidden text-gray-500 border-b-2 border-transparent px-2">
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
          </div>
          {/* Locations and Devices */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Locations */}
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

            {/* Devices */}
            <div className="bg-gray-800 rounded-md overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">Devices</h2>
                  <div className="flex text-sm">
                    <div className="text-indigo-400 border-b-2 border-indigo-400 px-2">
                      Browser
                    </div>
                    <div className="text-gray-500 border-b-2 border-transparent px-2">
                      OS
                    </div>
                    <div className="text-gray-500 border-b-2 border-transparent px-2">
                      Size
                    </div>
                  </div>
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
                      <span className="mr-2">{browser.icon}</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}
