import { ChangeEvent } from "react";

interface FileUploaderProps {
  fileName: string;
  onFileUpload: (file: File) => void;
}

export default function FileUploader({
  fileName,
  onFileUpload,
}: FileUploaderProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="flex items-center justify-center mb-8 w-full  p-4 rounded h-[500px]">
      <div>
        <label className="block text-sm font-medium text-gray-100 mb-2">
          Upload CSV File
        </label>
        <div className="flex items-center">
          <label className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer">
            Choose File
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          {fileName && <span className="ml-3 text-gray-500">{fileName}</span>}
        </div>
      </div>
    </div>
  );
}
