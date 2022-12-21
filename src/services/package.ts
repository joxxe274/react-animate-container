import axios from "axios";

export const getPackage = async () => {
  const response = await axios.get(`https://registry.npmjs.org/react-animate-container`);
  return response.data;
}

export const getWeeklyDownloads = async () => {
  const response = await axios.get(`https://api.npmjs.org/downloads/point/last-week/react-animate-container`);
  return response.data.downloads;
}