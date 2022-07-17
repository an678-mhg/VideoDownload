import React from "react";
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
        <div className="p-4 flex-1 bg-[#242526]">
          <p className="uppercase text-lg line-clamp-2">{video?.title}</p>
          <p className="text-lg text-[#a5a5a5]">
            {formatVideoTime(video?.lengthSeconds)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
