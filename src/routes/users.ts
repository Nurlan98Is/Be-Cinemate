import { Router, Request, Response } from "express";
import { getUsers, getUserById, getMyProfile } from "../controllers/users";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.get('/me', authMiddleware, getMyProfile);

router.get('/', getUsers);

router.get('/:id', getUserById);

export default router;