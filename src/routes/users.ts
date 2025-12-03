import { Router, Request, Response } from "express";
import { getUsers, getUserById } from "../controllers/users";

const router = Router();

router.get('/', getUsers);

router.get('/:id', getUserById)

export default router;