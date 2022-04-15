import { Router } from "express";
import { login } from "../../application/controllers/auth.controller";

const router = Router();

router.post('/', login);

export default router;