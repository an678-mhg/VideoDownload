import React from "react";

const SkeletonVideoCard = () => {
  return (
    <div className="lg:px-40 mt-10">
      <div className="flex flex-wrap">
        <div className="md:w-[40%] w-full aspect-video skeleton"></div>
        <div className="border p-4 flex-1">
          <p className="uppercase text-lg skeleton skeleton-text mb-1"></p>
          <p className="uppercase text-lg skeleton skeleton-text mb-1"></p>
          <p className="text-lg text-[#a5a5a5] skeleton skeleton-text w-[50px]"></p>
          <div className="mt-4">
            <a className="bg-blue-500 text-white px-3 py-2 skeleton">
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonVideoCard;
