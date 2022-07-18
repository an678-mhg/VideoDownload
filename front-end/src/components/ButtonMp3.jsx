import React from "react";

const ButtonMp3 = ({ link }) => {
  return (
    <div className="flex mt-4 lg:px-40">
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        download
        className="px-3 py-2 bg-blue-500 w-[139.86px]"
      >
        Download Mp3
      </a>
      <div className="px-3 py-2 bg-[#2c3e50] flex-1">
        <p>MP3</p>
      </div>
    </div>
  );
};

export default ButtonMp3;
