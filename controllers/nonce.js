import { generateNonce } from "siwe";

export const getNonce = async (req, res) => {
  try {
    const nonce = generateNonce();

    // throw new Error ("Testing errors")
    // Store the nonce in the session for later verification
    req.session.nonce = nonce;

    res.status(200).json({
      success: true,
      message: "Nonce generated successfully",
      nonce,
    });
  } catch (error) {
    console.error("Error generating your nonce:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate nonce",
      error: error.message || "Internal Server Error",
    });
  }
};
