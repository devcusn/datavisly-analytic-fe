import { Metadata } from "next";

import CSVViewerTool from "@/components/CSVViewerTool";

export const metadata: Metadata = {
  title: "CSV Viewer | Datavisly",
  description:
    "Upload and view CSV files with powerful search and filtering features. Online CSV Viewer and Editor",
  openGraph: {
    title: "CSV Viewer - Datavisly",
    description:
      "Upload and view CSV files with powerful search and filtering features. Online CSV Viewer and Editor",
    type: "website",
  },
};

export default function CSVViewer() {
  return <CSVViewerTool />;
}
