import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connect } from "./database/config/db";
dotenv.config();
const PORT = process.env.PORT ?? 4000;

connect(process.env.MONGO_URL!);

const app = express();
app.use(cors());

app.get("/api/product/test", (_, res) => {
  res.send("hi there from server!");
});

//   app.use("/api/product", authRoutes!);

app.get("*", (req, res) => {
  console.log(req.method, req.originalUrl, "not found");
  res.send(`${req.originalUrl} not found in product service.`);
});

app.listen(PORT, () => {
  console.log(`Product service listening on : http://localhost:${PORT}`);
});