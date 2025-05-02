interface DataSummaryProps {
  data: string[][];
  headers: string[];
  columnIndex: number;
}

export default function DataSummary({
  data,
  headers,
  columnIndex,
}: DataSummaryProps) {
  // Skip the header row
  const columnData = data.slice(1).map((row) => row[columnIndex]);

  // Try to convert to numbers for numeric calculations
  const numericData = columnData
    .filter((value) => !isNaN(Number(value)))
    .map((value) => Number(value));

  const isNumeric = numericData.length > 0;

  // Calculate basic statistics
  const min = isNumeric ? Math.min(...numericData) : "N/A";
  const max = isNumeric ? Math.max(...numericData) : "N/A";
  const sum = isNumeric ? numericData.reduce((a, b) => a + b, 0) : "N/A";
  const avg = isNumeric ? (sum as number) / numericData.length : "N/A";

  // Count unique values
  const uniqueValues = new Set(columnData);

  return (
    <div className="bg-gray-800/50 shadow-2xl p-4 rounded ">
      <h3 className="text-lg font-semibold mb-2">
        {headers[columnIndex] || `Column ${columnIndex + 1}`} Summary
      </h3>
      <div className="grid grid-cols-2 gap-2">
        <div className="text-sm">
          <span className="font-medium">Count:</span> {columnData.length}
        </div>
        <div className="text-sm">
          <span className="font-medium">Unique:</span> {uniqueValues.size}
        </div>
        {isNumeric && (
          <>
            <div className="text-sm">
              <span className="font-medium">Min:</span> {min}
            </div>
            <div className="text-sm">
              <span className="font-medium">Max:</span> {max}
            </div>
            <div className="text-sm">
              <span className="font-medium">Sum:</span> {sum}
            </div>
            <div className="text-sm">
              <span className="font-medium">Average:</span>{" "}
              {typeof avg === "number" ? avg.toFixed(2) : avg}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
