import React, { useState } from "react";
import { getVideoInfo } from "../services/api";
import SkeletonVideoCard from "../components/SkeletonVideoCard";
import VideoCard from "../components/VideoCard";
import { BsGithub } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import HowToUse from "../components/HowToUse";
import Selected from "./Selected";
import ButtonMp3 from "./ButtonMp3";
import { toast } from "react-toastify";

const ResultVideo = () => {
  const [data, setData] = useState({});
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    setData({});
    setLoading(true);
    try {
      const res = await getVideoInfo(text);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mt-10">
      <div className="w-full flex lg:px-40 mx-auto">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="px-3 py-2 flex-1 outline-none bg-[#242526]"
          placeholder="Pass your video link here..."
        />
        <button className="px-3 py-2 flex items-center justify-center ml-1 bg-blue-500 text-white font-semibold cursor-pointer">
          Search
        </button>
      </div>

      {loading && <SkeletonVideoCard />}

      {data?.video && <VideoCard video={data?.video} />}

      {data?.formats && <Selected data={data?.formats} />}

      {data?.mp3 && <ButtonMp3 link={data?.mp3} />}

      <div className="lg:mx-40 mt-4 bg-[#242526] p-4">
        <p className="text-center text-lg flex items-center cursor-pointer">
          <GiClick className="w-8 h-8 mr-4 text-blue-600" />
          <span className="md:text-lg text-sm">
            Download videos with just 1 click
          </span>
        </p>
      </div>

      <div className="lg:mx-40 mt-4 p-4 bg-[#242526]">
        <div className="text-center text-lg flex items-center">
          <BsGithub className="w-8 h-8 mr-4" />
          <span className="md:text-lg text-sm">
            Refer to the project on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/an678-mhg/VideoDownload"
              className="text-blue-500 underline"
            >
              Github
            </a>
          </span>
        </div>
      </div>

      <HowToUse />
    </form>
  );
};

export default ResultVideo;
