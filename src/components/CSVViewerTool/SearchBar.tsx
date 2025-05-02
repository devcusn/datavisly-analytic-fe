import { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  setCurrentPage,
}: SearchBarProps) {
  return (
    <div className="flex items-center text-white">
      <input
        type="text"
        placeholder="Search data..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        className="border rounded px-3 py-2 w-full md:w-64  border-gray-300"
      />
      {searchTerm && (
        <button onClick={() => setSearchTerm("")} className="ml-2  ">
          Clear
        </button>
      )}
    </div>
  );
}
