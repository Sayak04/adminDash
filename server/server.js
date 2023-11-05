import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
connectDB();

app.use("/api/v1", authRoutes);
app.get("/api/v1/user", (req, res) => {
  res.json({ user :" Sayak"});
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
