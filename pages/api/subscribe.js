export default async (req, res) => {
  console.log(req.body);

  try {
    console.log();
    res.status(200).send("Email subscribed successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing email");
  }
};
