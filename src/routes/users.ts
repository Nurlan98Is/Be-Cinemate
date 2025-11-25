import { Router, Request, Response } from "express";
import { getAllUsers, getUserById, getUserBysomeInfo, getUserByNickName } from "../controllers/users";

const router = Router();

router.get('/', getAllUsers);

router.post('/getUserByInfo', getUserBysomeInfo)

router.post('/getUserById', getUserById)

router.post('getUserByNickName', getUserByNickName) 

export default router;