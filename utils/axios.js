import axios from "axios";

const instance = () => {
  const request = axios.create({
    baseURL: "https://api.sendfox.com",
    timeout: 10000,
    headers: { Authorization: `Bearer ${process.env.SENDFOX_TOKEN}` },
  });

  return request;
};

export default instance;
