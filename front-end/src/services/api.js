import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BACK_END_URL;

const client = axios.create({
  baseURL: baseUrl,
});

export const getVideoInfo = (url) => {
  return client.get(`/download?url=${encodeURIComponent(url)}`);
};
