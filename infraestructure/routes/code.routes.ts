import { Router } from "express";
import { createCodeVerification } from "../../application/controllers/code.controller";

const router = Router();

router.post('/',createCodeVerification);

export default router;