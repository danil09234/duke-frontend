import React from "react";
import LibraryEmptyState from "@/components/LibraryEmptyState";

const LibraryPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LibraryEmptyState />
    </div>
  );
};

export default LibraryPage;
