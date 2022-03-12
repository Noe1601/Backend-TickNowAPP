import { Router } from "express";
import { check } from "express-validator";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/users.controller";

const router = Router();

router.get('/',getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;