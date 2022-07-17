import Header from "../components/Header";
import { BsYoutube } from "react-icons/bs";
import ResultVideo from "../components/ResultVideo";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Youtube Video And Audio Downloader</title>
      </Head>

      <Header />

      <div className="py-10 container">
        <div className="flex items-center justify-center">
          <p className="lg:text-3xl text-2xl">Youtube Video Downloader</p>

          <BsYoutube className="w-8 h-8 text-red-500 ml-2" />
        </div>

        <ResultVideo />
      </div>
    </div>
  );
}
