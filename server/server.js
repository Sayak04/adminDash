import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import passportConfig from "./passport.js";

const app = express();
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
dotenv.config();
connectDB();


app.use("/api/v1", authRoutes);
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/user",
    failureRedirect: "/sign-up",
  })
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
