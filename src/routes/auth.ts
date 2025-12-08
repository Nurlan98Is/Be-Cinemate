import { Router } from "express";
import { authLogin, authLogout, authRegister } from "../controllers/auth";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router()

router.post('/login', authLogin)

router.post('/register', authRegister)

router.post('/logout', authMiddleware, authLogout)
export default router