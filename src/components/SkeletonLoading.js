import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="flex flex-col bg-white shadow-md h-[380px] min-w-[200px] rounded-md overflow-hidden">
      <div className="h-[280px] bg-gray-200 animate-pulse"></div>
      <div className="h-[150px] p-3 bg-gray-200">
        <div className="bg-gray-200 w-3/4 h-4 mt-1 mb-2 animate-pulse"></div>
        <div className="bg-gray-200 w-full h-4 animate-pulse"></div>
        <div className="bg-gray-200 w-5/6 h-4 mt-2 animate-pulse"></div>
        <div className="bg-gray-200 w-2/3 h-4 mt-2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
