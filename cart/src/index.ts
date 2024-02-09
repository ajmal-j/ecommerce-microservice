import express from "express";
import { connect } from "./database/config/db";
import { cartRouter } from "./routes/index";
import cors from "cors";
import dotenv from "dotenv";
const PORT = process.env.PORT ?? 5000;
dotenv.config();

connect(String(process.env.MONGO_URL)!);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/cart/test", (_, res) => {
  res.send("hi there from server!");
});

app.use("/api/cart", cartRouter!);

app.get("*", (req, res) => {
  console.log(req.method, req.originalUrl, "not found");
  res.send(`${req.originalUrl} not found in cart service.`);
});

app.listen(PORT, () => {
  console.log(`Server listening on : http://localhost:${PORT}`);
});
