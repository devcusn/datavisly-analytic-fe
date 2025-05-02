import { Dispatch, SetStateAction } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  filteredData: string[][];
  rowsPerPage: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  filteredData,
  rowsPerPage,
}: PaginationProps) {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="text-sm text-gray-500">
        Showing{" "}
        {Math.min(filteredData.length, (currentPage - 1) * rowsPerPage + 1)}-
        {Math.min(filteredData.length, currentPage * rowsPerPage)} of{" "}
        {filteredData.length} rows
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
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
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
  );
}
