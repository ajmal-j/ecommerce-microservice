import express from "express";
import { connect } from "./database/config/db";
import authRoutes from "./routes/index";
import cors from "cors";
import dotenv from "dotenv";
const PORT = process.env.PORT ?? 3000;
dotenv.config();

connect(String(process.env.MONGO_URL)!);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/auth/test", (_, res) => {
  res.send("hi there from server!");
});

app.use("/api/auth", authRoutes!);

app.get("*", (req, res) => {
  console.log(req.method, req.originalUrl, "not found");
  res.send(`${req.originalUrl} not found in auth service.`);
});

app.listen(PORT, () => {
  console.log(`Server listening on : http://localhost:${PORT}`);
});
