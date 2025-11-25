import { Router } from "express";
import { getAllSerials, getSerialById } from "../controllers/series";

const router = Router();

router.get('/', getAllSerials)

router.get('/:id', getSerialById)




export default router