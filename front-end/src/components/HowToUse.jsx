import React from "react";

const HowToUse = () => {
  return (
    <div className="bg-[#242526] lg:mx-20 mt-10 p-4">
      <h1 className="mb-4 text-xl font-semibold text-center">How to use</h1>
      <div>
        <p className="py-2">
          1.{" "}
          <span className="font-semibold mr-1">Copy the URL from youtube</span>
          into the input field at the top of the downloader page and hit search
        </p>
        <p className="py-2">
          2.{" "}
          <span className="font-semibold">Select the file and download it</span>
        </p>
      </div>
    </div>
  );
};

export default HowToUse;
