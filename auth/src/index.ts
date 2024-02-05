import express from "express";

const app = express();

app.get("/api/v1/users/currentuser", (_, res) => {
  res.send("hi there!!");
});

app.listen(3000, () => {
  console.log("running on 3000");
});
