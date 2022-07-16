import React from "react";

const HowToUse = () => {
  return (
    <div className="bg-[#EAF1F5] lg:mx-20 mt-10 p-4">
      <h1 className="mb-4 text-xl font-semibold text-center">How to use</h1>
      <div>
        <p className="py-2">
          1.{" "}
          <span className="font-semibold mr-1">Copy the URL from youtube</span>
          into the input field at the top of the downloader page and hit search
        </p>
        <p className="py-2">
          2. <span className="font-semibold">Click download</span>
          <img
            className="w-full aspect-auto mt-4"
            alt="img"
            src="https://res.cloudinary.com/annnn/image/upload/v1657957797/A%CC%89nh_chu%CC%A3p_ma%CC%80n_hi%CC%80nh_2022-07-16_144938_frg2m7.png"
          />
        </p>
      </div>
    </div>
  );
};

export default HowToUse;
