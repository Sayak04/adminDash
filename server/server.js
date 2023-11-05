import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
dotenv.config();
connectDB();

app.use("/api/v1", authRoutes);
app.get("/api/hello", (req, res) => {
  res.json([{ name: "sayak" }, { name: "John" }, { name: "Ankana" }]);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
