import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser, recuperatePassword } from "../../application/controllers/users.controller";

const router = Router();

router.get('/',getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.put('/', recuperatePassword);

export default router;