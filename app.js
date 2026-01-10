import express from "express";
import { PORT } from "./config/env.js";
import siweRouter from "./routes/siwe.js";
import session from "express-session"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
  origin: "http://localhost:3000", // your frontend URL
  credentials: true,
}))
app.use(express.json()); // parse JSON request bodies
app.use(cookieParser());

// Session middleware for storing nonce
app.use(
  session({
    secret: "your-secret-key", // change this in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // true only for HTTPS
  }),
);

app.use("/siwe", siweRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log(`Server is running on port: ${PORT}`);
});
