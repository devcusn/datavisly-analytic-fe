import { AnalyticResult, getAnalytic } from "@/services/analytic/endpoints";
import MetricCard from "./_components/MetricCard";
import AnalyticsChart from "./_components/AnalyticsChart";
import SourcesPanel from "./_components/SourcesPanel";
import PagesPanel from "./_components/PagesPanel";
import LocationsPanel from "./_components/LocationsPanel";
import DevicesPanel from "./_components/DevicesPanel";
import BrowserPanel from "./_components/BrowserPanel";
import DevicesTypePanel from "./_components/DevicesTypePanel";

interface SiteData {
  id: string;
  name: string;
  url: string;
  domain: string;
}

interface AnalyticsClientProps {
  siteData: SiteData;
}

export default async function AnalyticsClient({
  siteData,
}: AnalyticsClientProps) {
  const data: AnalyticResult = await getAnalytic(siteData.domain);

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
      value: data?.uniq_visitors,
      change: "-6%",
      direction: "up",
    },
    {
      title: "TOTAL VISITS",
      value: data?.total_visits,
      change: "-3%",
      direction: "down",
    },
    {
      title: "TOTAL PAGEVIEWS",
      value: data?.total_pages_views,
      change: "8%",
      direction: "up",
    },
    {
      title: "VIEWS PER VISIT",
      value: data.viewsPerVisit,
      change: "-5%",
      direction: "down",
    },
    { title: "BOUNCE RATE", value: "32%", change: "0%", direction: "neutral" },
    { title: "VISIT DURATION", value: "6m 12s", change: "1%", direction: "up" },
  ];

  const sources = data.referrers.map((r) => ({
    name: r.source,
    visitors: r.count,
  }));
  const pages = data?.page_views;

  const browsers = data.devices.browsers.map((b) => ({
    name: b.name,
    visitors: String(b.count),
    percentage: String(0),
  }));

  const devices = data.devices.devices.map((b) => ({
    name: b.name,
    visitors: String(b.count),
    percentage: String(0),
  }));
  const devicesType = data.devices.devices_type.map((b) => ({
    name: b.name,
    visitors: String(b.count),
    percentage: String(0),
  }));

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
              <div className="text-sm font-extrabold">
                {data.currentVisitors} current visitors
              </div>
            </div>
            <div className="flex items-center gap-4 w-full justify-end"></div>
          </div>
          <div className="grid grid-cols-6 gap-4 mb-8">
            {metricCards.map((card, index) => (
              <MetricCard
                key={index}
                title={card.title}
                value={card.value}
                change={card.change}
                direction={card.direction as "up" | "down" | "neutral"}
              />
            ))}
          </div>

          {/* Chart */}
          <AnalyticsChart data={chartData} />

          {/* Sources and Pages */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Sources */}
            <SourcesPanel sources={sources} />

            {/* Pages */}
            <PagesPanel pages={pages} />
          </div>
          <div className="grid grid-cols-3 gap-8 mb-8">
            <BrowserPanel browsers={browsers} />
            <DevicesPanel devices={devices} />
            <DevicesTypePanel devicesType={devicesType} />
          </div>
          <div className="mb-8">
            <LocationsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
