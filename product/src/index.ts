import express from "express";
import cors from "cors";
import { connect } from "./database/config/db";
import { productRoutes } from "./routes/index";
const PORT = process.env.PORT ?? 4000;

connect(process.env.MONGO_URL!);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/product/test", (_, res) => {
  res.send("hi there from server!");
});

app.use("/api/product", productRoutes);

app.get("*", (req, res) => {
  console.log(req.method, req.originalUrl, "not found");
  res.send(`${req.originalUrl} not found in product service.`);
});

app.listen(PORT, () => {
  console.log(`Product service listening on : http://localhost:${PORT}`);
});
