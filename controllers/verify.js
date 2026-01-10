import { SiweMessage } from "siwe";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export const verifyNonce = async (req, res) => {
  try {
    const { message, signature } = req.body;

    const siweMessage = new SiweMessage(message);
    const storedNonce = req.session.nonce;

    if (!storedNonce) {
      return res.status(400).json({ error: "Nonce not found" });
    }

    const result = await siweMessage.verify({
      signature,
      nonce: storedNonce,
    });

    req.session.nonce = null;

    const token = jwt.sign({ address: result.data.address }, JWT_SECRET, {
      expiresIn: "2h",
    });

    res.cookie("auth", token, {
      httpOnly: true,
      secure: false, // true in production (HTTPS)
      sameSite: "lax", // set to none in production, site domains will be very different. In production, lax is usually fine if frontend and backend are on subdomains of the same domain(localhost for dev)
      maxAge: 2 * 60 * 60 * 1000, // 2 hours
    });

    res.json({ success: true });
  } catch (err) {
    res.status(401).json({ success: false });
  }
};