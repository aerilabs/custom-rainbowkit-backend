import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export const getUser = async (req, res) => {
  try {
    const token = req.cookies.auth;
    if (!token) {
      return res.status(401).json({ user: null });
    }

    const payload = jwt.verify(token, JWT_SECRET);

    res.json({
      address: payload.address,
    });
  } catch {
    res.status(401).json({ user: null });
  }
};
