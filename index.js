import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello ");
});

app.listen(process.env.PORT, () => {
  console.log(`your server is listening to port ${process.env.PORT} ✅`);
});
