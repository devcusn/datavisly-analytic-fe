"use client";

import { useState, ChangeEvent, useMemo } from "react";
import Papa from "papaparse";

interface CSVData {
  data: string[][];
  errors: Papa.ParseError[];
  meta: Papa.ParseMeta;
}

export default function CSVViewerTool() {
  const [csvData, setCsvData] = useState<CSVData | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setIsLoading(true);
    setError(null);
    setCurrentPage(1);
    setSearchTerm("");

    Papa.parse<string[]>(file, {
      complete: (results: Papa.ParseResult<string[]>) => {
        setCsvData(results as CSVData);
        setIsLoading(false);
      },
      error: (err: Error) => {
        setError(`Error parsing CSV: ${err.message}`);
        setIsLoading(false);
        setCsvData(null);
      },
      header: false,
      skipEmptyLines: true,
    });
  };

  const filteredData = useMemo(() => {
    if (!csvData || !csvData.data.length) return [];

    // Get data rows (skip header row)
    const rows = csvData.data.slice(1);

    if (!searchTerm) return rows;

    return rows.filter((row) => {
      return row.some((cell) =>
        cell.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [csvData, searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, currentPage, rowsPerPage]);

  const handleDownloadCSV = () => {
    if (!csvData) return;

    const csv = Papa.unparse(csvData.data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName || "download.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload CSV File
        </label>
        <div className="flex items-center">
          <label className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer">
            Choose File
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
          {fileName && <span className="ml-3 text-gray-500">{fileName}</span>}
        </div>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center my-8">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          <span className="ml-3">Loading CSV...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {csvData && csvData.data.length > 0 && (
        <>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search data..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="border rounded px-3 py-2 w-full md:w-64 text-white border-white"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <label htmlFor="rowsPerPage" className="mr-2 text-sm">
                  Rows:
                </label>
                <select
                  id="rowsPerPage"
                  value={rowsPerPage}
                  onChange={(e) => {
                    setRowsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border rounded px-2 py-1"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>

              <button
                onClick={handleDownloadCSV}
                className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
              >
                Download CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto border rounded">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  {csvData.data[0].map((header, index) => (
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
                {paginatedData.length > 0 ? (
                  paginatedData.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={rowIndex % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="py-2 px-4 border-b text-sm text-black"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={csvData.data[0].length}
                      className="py-4 px-4 text-center text-gray-500"
                    >
                      No results found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-500">
                Showing{" "}
                {Math.min(
                  filteredData.length,
                  (currentPage - 1) * rowsPerPage + 1
                )}
                -{Math.min(filteredData.length, currentPage * rowsPerPage)}
                of {filteredData.length} rows
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="px-2 py-1 border rounded text-sm disabled:opacity-50"
                >
                  First
                </button>
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-2 py-1 border rounded text-sm disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 border rounded text-sm disabled:opacity-50"
                >
                  Next
                </button>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 border rounded text-sm disabled:opacity-50"
                >
                  Last
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {csvData && csvData.data.length === 0 && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
          The CSV file is empty.
        </div>
      )}
    </div>
  );
}
