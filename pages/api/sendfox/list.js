import axios from "../../../utils/axios";

const getList = async () => {
  try {
    const instance = axios();
    const response = await instance.get("/lists");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default async (req, res) => {
  if (req.method === "GET") {
    const response = await getList();
    // console.log(typeof response);
    res.status(200).send(response);
  }

  res.status(400).send("Invalid http request");
};
