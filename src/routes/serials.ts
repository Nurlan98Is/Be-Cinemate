import { Router } from "express";
import { getAllSerials, getSerialById } from "../controllers/serilas";

const router = Router();

router.get('/', getAllSerials)

router.get('/:id', getSerialById)




export default router