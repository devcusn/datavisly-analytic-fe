import { useState } from "react";
import DataSummary from "./DataSummary";

interface DataVisualizerProps {
  data: string[][];
  headers: string[];
}

export default function DataVisualizer({ data, headers }: DataVisualizerProps) {
  const [selectedColumn, setSelectedColumn] = useState<number>(0);

  // Generate simple column distribution visualization
  const generateDistribution = (columnIndex: number) => {
    if (!data || data.length <= 1) return null;

    // Skip header row
    const columnData = data
      .slice(1)
      .map((row) => row[columnIndex])
      .filter((val) => val !== undefined && val !== "");

    // For numeric data, create buckets
    const numericData = columnData
      .filter((val) => !isNaN(Number(val)))
      .map((val) => Number(val));

    const isNumeric =
      numericData.length > 0 && numericData.length >= columnData.length * 0.5;

    if (isNumeric) {
      // Create histogram buckets
      const min = Math.min(...numericData);
      const max = Math.max(...numericData);
      const range = max - min;
      const bucketCount = Math.min(
        10,
        Math.ceil(Math.sqrt(numericData.length))
      );
      const bucketSize = range / bucketCount || 1;

      const buckets = Array(bucketCount).fill(0);
      numericData.forEach((val) => {
        const bucketIndex = Math.min(
          bucketCount - 1,
          Math.floor((val - min) / bucketSize)
        );
        buckets[bucketIndex]++;
      });

      const maxBucketValue = Math.max(...buckets);

      return (
        <div className="mt-4 ">
          <h4 className="text-sm font-medium mb-2">Distribution</h4>
          <div className="flex items-end space-x-1 h-32">
            {buckets.map((count, i) => {
              const height = (count / maxBucketValue) * 100;
              const bucketStart = min + i * bucketSize;
              const bucketEnd = bucketStart + bucketSize;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="bg-blue-500 w-8"
                    style={{ height: `${height}%` }}
                    title={`${count} values between ${bucketStart.toFixed(
                      1
                    )} and ${bucketEnd.toFixed(1)}`}
                  ></div>
                  <div className="text-xs mt-1 text-gray-500 rotate-45 origin-top-left">
                    {bucketStart.toFixed(1)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-xs text-right mt-2">{max.toFixed(1)}</div>
        </div>
      );
    } else {
      // Create category distribution for non-numeric data
      const valueCounts: Record<string, number> = {};
      columnData.forEach((val) => {
        valueCounts[val] = (valueCounts[val] || 0) + 1;
      });

      // Sort by frequency and limit to top 10
      const sortedCategories = Object.entries(valueCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

      const maxCount = Math.max(...sortedCategories.map(([, count]) => count));

      return (
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Top Categories</h4>
          <div className="space-y-2">
            {sortedCategories.map(([category, count]) => {
              const width = (count / maxCount) * 100;
              return (
                <div key={category} className="flex items-center">
                  <div className="w-20 text-xs truncate" title={category}>
                    {category}
                  </div>
                  <div className="flex-1">
                    <div
                      className="bg-blue-500 h-4 rounded-sm"
                      style={{ width: `${width}%` }}
                    ></div>
                  </div>
                  <div className="w-10 text-xs text-right ml-2">{count}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Column
        </label>
        <div className="flex flex-wrap gap-2">
          {headers.map((header, index) => (
            <button
              key={index}
              onClick={() => setSelectedColumn(index)}
              className={`py-1 px-3 text-sm rounded ${
                selectedColumn === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {header || `Column ${index + 1}`}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DataSummary
          data={data}
          headers={headers}
          columnIndex={selectedColumn}
        />

        <div className="bg-gray-800/50 shadow-2xl p-4 rounded ">
          {generateDistribution(selectedColumn)}
        </div>
      </div>
    </div>
  );
}
