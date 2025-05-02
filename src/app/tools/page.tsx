import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ToolsPage = () => {
  return (
    <div className="container mx-auto p-2">
      <h1 className="text-3xl font-bold mb-2">Tools</h1>
      <p className="text-gray-500 mb-8">
        Powerful utilities to enhance your data analysis
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 p-4 shadow-2xl hover:shadow-3xl transition-all duration-300  ">
          <div className="relative">
            <h2 className="text-xl font-bold mb-2">CSV Viewer</h2>
            <p className="text-gray-600 mb-6">
              Upload and analyze CSV files with powerful search and pagination
              capabilities.
            </p>

            <Link
              href="/tools/csv-viewer"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform"
            >
              Open tool <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
