import { Router } from "express";
import { getNonce } from "../controllers/nonce.js";
import { verifyNonce } from "../controllers/verify.js";

const siweRouter = Router();

siweRouter.get("/nonce", getNonce);
siweRouter.post("/verify", verifyNonce);
// siweRouter.get('/me', (''))

export default siweRouter;
