import express from "express";
import { PORT } from "./config/env.js";
import siweRouter from "./routes/siwe.js";
import session from "express-session"

const app = express();
app.use(express.json()); // parse JSON request bodies

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
