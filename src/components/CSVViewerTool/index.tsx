"use client";

import { useState, useMemo } from "react";
import Papa from "papaparse";
import FileUploader from "./FileUploader";
import TableView from "./TableView";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import DataVisualizer from "./DataVisualizer";

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

  const handleFileUpload = (file: File) => {
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

  const headers = csvData?.data[0] || [];

  return (
    <div className="container mx-auto px-4 py-2 bg-gray-800/50 ">
      {!fileName && (
        <FileUploader onFileUpload={handleFileUpload} fileName={fileName} />
      )}

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
          <div className="flex justify-between items-center mb-4 mt-6">
            <button
              onClick={handleDownloadCSV}
              className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
            >
              Download CSV
            </button>
          </div>

          <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setCurrentPage={setCurrentPage}
              />
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
            </div>

            <TableView
              headers={headers}
              data={paginatedData}
              filteredDataLength={filteredData.length}
            />

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                filteredData={filteredData}
                rowsPerPage={rowsPerPage}
              />
            )}
          </>

          <DataVisualizer data={csvData.data} headers={headers} />
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
