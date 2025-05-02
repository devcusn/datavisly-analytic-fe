interface TableViewProps {
  headers: string[];
  data: string[][];
  filteredDataLength?: number;
}

export default function TableView({ headers, data }: TableViewProps) {
  return (
    <div className="overflow-x-auto border rounded">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header, index) => (
              <th
                key={index}
                className="py-2 px-4 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                {header || `Column ${index + 1}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-gray-50" : ""}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="py-2 px-4 border-b text-sm text-gray-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers.length}
                className="py-4 px-4 text-center text-gray-500"
              >
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
