import React from "react";
import { downloadLink } from "../api";
import { formatVideoTime } from "../utils/constans";

const VideoCard = ({ video }) => {
  return (
    <div className="lg:px-40 mt-10">
      <div className="flex flex-wrap">
        <div className="md:w-[40%] w-full aspect-video">
          <img
            src={video?.thumbnails[video?.thumbnails?.length - 1]?.url}
            alt={video?.title}
            className="w-full h-full"
          />
        </div>
        <div className="border p-4 flex-1">
          <p className="uppercase text-lg line-clamp-2">{video?.title}</p>
          <p className="text-lg text-[#a5a5a5]">
            {formatVideoTime(video?.lengthSeconds)}
          </p>
          <div className="mt-4">
            <a
              className="bg-blue-500 text-white px-3 py-2"
              href={downloadLink(video?.url)}
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
