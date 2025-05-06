import { useRef, useEffect } from "react";

interface TimeRangeSelectorProps {
  selectedRange: string;
  setSelectedRange: (range: string) => void;
  dropdownOpen: boolean;
  setDropdownOpen: (isOpen: boolean) => void;
}

export default function TimeRangeSelector({
  selectedRange,
  setSelectedRange,
  dropdownOpen,
  setDropdownOpen,
}: TimeRangeSelectorProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setDropdownOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "d" || event.key === "D") {
        handleRangeSelect("Today");
      } else if (event.key === "e" || event.key === "E") {
        handleRangeSelect("Yesterday");
      } else if (event.key === "r" || event.key === "R") {
        handleRangeSelect("Realtime");
      } else if (event.key === "w" || event.key === "W") {
        handleRangeSelect("Last 7 Days");
      } else if (event.key === "f" || event.key === "F") {
        handleRangeSelect("Last 28 Days");
      } else if (event.key === "n" || event.key === "N") {
        handleRangeSelect("Last 91 Days");
      } else if (event.key === "m" || event.key === "M") {
        handleRangeSelect("Month to Date");
      } else if (event.key === "p" || event.key === "P") {
        handleRangeSelect("Last Month");
      } else if (event.key === "y" || event.key === "Y") {
        handleRangeSelect("Year to Date");
      } else if (event.key === "l" || event.key === "L") {
        handleRangeSelect("Last 12 Months");
      } else if (event.key === "a" || event.key === "A") {
        handleRangeSelect("All time");
      } else if (event.key === "c" || event.key === "C") {
        handleRangeSelect("Custom Range");
      } else if (event.key === "x" || event.key === "X") {
        handleRangeSelect("Compare");
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleRangeSelect = (range: string) => {
    setSelectedRange(range);
    setDropdownOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="bg-gray-800 pl-4 pr-8 py-2 rounded-md flex items-center justify-between min-w-[200px]"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {selectedRange}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 absolute right-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {dropdownOpen && (
        <div className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg">
          <div
            className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
            onClick={() => handleRangeSelect("Today")}
          >
            <span>Today</span>
            <span className="text-gray-500">D</span>
          </div>
          <div
            className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
            onClick={() => handleRangeSelect("Yesterday")}
          >
            <span>Yesterday</span>
            <span className="text-gray-500">E</span>
          </div>
          <div
            className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
            onClick={() => handleRangeSelect("Realtime")}
          >
            <span>Realtime</span>
            <span className="text-gray-500">R</span>
          </div>
          <div className="border-t border-gray-700 my-1"></div>
          <div
            className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
            onClick={() => handleRangeSelect("Last 7 Days")}
          >
            <span>Last 7 Days</span>
            <span className="text-gray-500">W</span>
          </div>
          <div
            className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
            onClick={() => handleRangeSelect("Last 28 Days")}
          >
            <span>Last 28 Days</span>
            <span className="text-gray-500">F</span>
          </div>
          <div
            className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
            onClick={() => handleRangeSelect("Last 91 Days")}
          >
            <span>Last 91 Days</span>
            <span className="text-gray-500">N</span>
          </div>
          <div className="border-t border-gray-700 my-1"></div>
          <div
            className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
            onClick={() => handleRangeSelect("Month to Date")}
          >
            <span>Month to Date</span>
            <span className="text-gray-500">M</span>
          </div>
          <div
            className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
            onClick={() => handleRangeSelect("Last Month")}
          >
            <span>Last Month</span>
            <span className="text-gray-500">P</span>
          </div>
          <div className="border-t border-gray-700 my-1"></div>
          <div
            className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
            onClick={() => handleRangeSelect("Year to Date")}
          >
            <span>Year to Date</span>
            <span className="text-gray-500">Y</span>
          </div>
          <div
            className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
            onClick={() => handleRangeSelect("Last 12 Months")}
          >
            <span>Last 12 Months</span>
            <span className="text-gray-500">L</span>
          </div>
          <div className="border-t border-gray-700 my-1"></div>
          <div
            className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
            onClick={() => handleRangeSelect("All time")}
          >
            <span>All time</span>
            <span className="text-gray-500">A</span>
          </div>
          <div
            className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
            onClick={() => handleRangeSelect("Custom Range")}
          >
            <span>Custom Range</span>
            <span className="text-gray-500">C</span>
          </div>
          <div className="border-t border-gray-700 my-1"></div>
          <div
            className="p-2 hover:bg-gray-700 flex justify-between cursor-pointer"
            onClick={() => handleRangeSelect("Compare")}
          >
            <span>Compare</span>
            <span className="text-gray-500">X</span>
          </div>
        </div>
      )}
    </div>
  );
}
