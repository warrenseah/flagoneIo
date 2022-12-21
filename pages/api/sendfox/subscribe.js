import axios from "axios";

const listID = "385942";

const postContact = async (email, first_name) => {
  try {
    const instance = axios.create({
      baseURL: "https://api.sendfox.com",
      timeout: 60000,
      headers: { Authorization: `Bearer ${process.env.SENDFOX_TOKEN}` },
    });
    const response = await instance.post(
      `/contacts?email=${email}&first_name=${first_name}&lists[]=${listID}`
    );
    return response.data;
  } catch (error) {
    // console.error(error);
    throw new Error(error.message);
  }
};

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(400).send("Invalid http request");
  }

  const { email, first_name } = req.body;

  try {
    const response = await postContact(email, first_name);
    // console.log(response);

    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
