import { SiweMessage } from "siwe";

export const verifyNonce = async (req, res) => {
  try {
    const { message, signature } = req.body;

    if (!message || !signature) {
      return res.status(400).json({ error: "Missing message or signature" });
    }

    const siweMessage = new SiweMessage(message);
    const storedNonce = req.session.nonce;

    if (!storedNonce) {
      return res.status(400).json({ error: "Nonce not found" });
    }

    const result = await siweMessage.verify({
      signature,
      domain: "example.com",
      nonce: storedNonce,
    });

    // Invalidate nonce after use
    req.session.nonce = null;

    res.status(200).json({
      success: result.success,
      address: result.data.address,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Verification failed",
      error: error.message || "Internal Server Error",
    });
  }
};
