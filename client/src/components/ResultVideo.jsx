import React, { useState } from "react";
import { toast } from "react-toastify";
import { getVideoInfo } from "../api";
import SkeletonVideoCard from "./SkeletonVideoCard";
import VideoCard from "./VideoCard";
import { BsGithub } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import HowToUse from "./HowToUse";

const ResultVideo = () => {
  const [data, setData] = useState({});
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    if (!text.startsWith("https://") || text.indexOf("youtube") === -1) {
      return toast.error("Sai định dạng đường dẫn!");
    }

    setData({});
    setLoading(true);
    try {
      const res = await getVideoInfo(text);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mt-20">
      <div className="w-full flex items-center lg:px-40 mx-auto">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="px-3 py-2 flex-1 outline-none border-[5px] border-blue-500"
          placeholder="Pass your video link here..."
        />
        <button className="px-4 rounded-sm h-[50px] flex items-center justify-center ml-2 bg-blue-500 text-white font-semibold cursor-pointer">
          Search
        </button>
      </div>

      {loading && <SkeletonVideoCard />}

      {data?.video && <VideoCard video={data?.video} />}

      <div className="lg:mx-40 mt-10 border p-4">
        <p className="text-center text-lg flex items-center justify-center cursor-pointer">
          <GiClick className="w-8 h-8 mr-2 text-blue-600" />
          <span>Download videos with just 1 click</span>
        </p>
      </div>

      <div className="lg:mx-40 mt-4 border p-4">
        <a
          href="https://github.com/an678-mhg/VideoDownload"
          className="text-center text-lg flex items-center justify-center cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="w-8 h-8 mr-2" />
          <span className="text-blue-500">Refer to the project on github</span>
        </a>
      </div>

      <HowToUse />
    </form>
  );
};

export default ResultVideo;
