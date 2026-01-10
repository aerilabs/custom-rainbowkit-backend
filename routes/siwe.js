import { Router } from "express";
import { getNonce } from "../controllers/nonce.js";
import { verifyNonce } from "../controllers/verify.js";
import { logOut } from "../controllers/logout.js";
import { getUser } from "../controllers/me.js";

const siweRouter = Router();

siweRouter.get("/nonce", getNonce);
siweRouter.post("/verify", verifyNonce);
siweRouter.get('/me', getUser)
siweRouter.get('/logout', logOut )

export default siweRouter;
