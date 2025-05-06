"use client";

import { ArrowUp, ArrowDown } from "lucide-react";

export interface MetricCardProps {
  title: string;
  value: string | number | undefined;
  change: string;
  direction: "up" | "down" | "neutral";
}

export default function MetricCard({
  title,
  value,
  change,
  direction,
}: MetricCardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-md">
      <div className="text-xs text-gray-500 mb-1">{title}</div>
      <div className="flex items-center">
        <div className="text-2xl font-semibold">{value}</div>
        <div
          className={`ml-2 text-sm flex items-center ${
            direction === "up"
              ? "text-green-500"
              : direction === "down"
              ? "text-red-500"
              : "text-gray-500"
          }`}
        >
          {direction === "up" && <ArrowUp size={14} />}
          {direction === "down" && <ArrowDown size={14} />}
          {change}
        </div>
      </div>
    </div>
  );
}
