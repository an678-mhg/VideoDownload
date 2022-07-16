import axios from "axios";
const baseUrl = "https://video-download-flax.vercel.app";

const client = axios.create({
  baseURL: baseUrl,
});

export const getVideoInfo = (url) => {
  return client.get(`/info?url=${encodeURIComponent(url)}`);
};

export const downloadLink = (url) => {
  return `${baseUrl}/download?url=${encodeURIComponent(url)}`;
};
