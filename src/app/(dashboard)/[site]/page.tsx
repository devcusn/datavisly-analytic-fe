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

const AnalyticPage = () => {
  // Örnek veri
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

  const pages = [
    { path: "/", visitors: "165k" },
    { path: "/analytic", visitors: "100.4k" },
    { path: "/login", visitors: "32.9k" },
    { path: "/signup", visitors: "14.3k" },
    { path: "/share/:dashboard", visitors: "9k" },
    { path: "/dashboard/settings/general", visitors: "7.2k" },
    { path: "/register", visitors: "6.2k" },
    { path: "/plausible.io", visitors: "5.2k" },
    { path: "/settings/preferences", visitors: "5.1k" },
  ];

  const browsers = [
    { name: "Chrome", icon: "🌐", visitors: "150k", percentage: "59.3%" },
    { name: "Safari", icon: "🌐", visitors: "70.5k", percentage: "27.8%" },
    { name: "Firefox", icon: "🦊", visitors: "14.8k", percentage: "5.9%" },
    { name: "Microsoft Edge", icon: "🌐", visitors: "10.1k", percentage: "4%" },
    { name: "Mobile App", icon: "📱", visitors: "3k", percentage: "1.2%" },
    { name: "not set", icon: "❓", visitors: "2k", percentage: "0.8%" },
    { name: "Opera", icon: "🌐", visitors: "1.2k", percentage: "0.5%" },
  ];

  const goals = [
    { name: "Scroll to Goals", uniques: "75.2k", total: "-", cr: "29.7%" },
    {
      name: "Deep scroll - homepage",
      uniques: "15.2k",
      total: "-",
      cr: "6.02%",
    },
    { name: "Visit /register", uniques: "6.2k", total: "8.4k", cr: "2.46%" },
    { name: "Visit /blog*", uniques: "4.9k", total: "7.1k", cr: "1.97%" },
    { name: "Add a site", uniques: "4k", total: "5.6k", cr: "1.61%" },
    { name: "Visit /activate", uniques: "2.8k", total: "3.7k", cr: "1.13%" },
    { name: "Sign up for a trial", uniques: "2k", total: "2.1k", cr: "0.82%" },
    { name: "Scroll /blog* 50%", uniques: "1.9k", total: "-", cr: "0.77%" },
    {
      name: "Sign up via invitation",
      uniques: "669",
      total: "680",
      cr: "0.26%",
    },
  ];

  return (
    <div className="bg-gray-900">
      <div className="w-9/12 mx-auto  text-gray-100 min-h-screen">
        {/* Main Content */}
        <div className="p-6">
          {/* Metrics */}
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
                {pages.map((page, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 text-sm"
                  >
                    <div className="truncate max-w-md">{page.path}</div>
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

          {/* Goal Conversions */}
          <div className="bg-gray-800 rounded-md overflow-hidden mb-8">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Goal Conversions</h2>
                <div className="flex text-sm">
                  <div className="text-indigo-400 border-b-2 border-indigo-400 px-2">
                    Goals
                  </div>
                  <div className="text-gray-500 border-b-2 border-transparent px-2">
                    Properties
                  </div>
                  <div className="text-gray-500 border-b-2 border-transparent px-2">
                    Funnels
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                <div>Goal</div>
                <div className="flex items-center space-x-6">
                  <span className="w-24 text-right">Uniques</span>
                  <span className="w-24 text-right">Total</span>
                  <span className="w-24 text-right">CR</span>
                </div>
              </div>
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 text-sm"
                >
                  <div>{goal.name}</div>
                  <div className="flex items-center space-x-6">
                    <span className="font-medium w-24 text-right">
                      {goal.uniques}
                    </span>
                    <span className="w-24 text-right">{goal.total}</span>
                    <span className="text-gray-400 w-24 text-right">
                      {goal.cr}
                    </span>
                  </div>
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
      </div>
    </div>
  );
};

export default AnalyticPage;
