"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartDataPoint {
  name: string;
  value: number;
}

interface AnalyticsChartProps {
  data: ChartDataPoint[];
}

export default function AnalyticsChart({ data }: AnalyticsChartProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-md mb-8">
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
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
  );
}
