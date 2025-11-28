import { Router } from "express";
import { getAllSeries, getSerialById, getSeriesByFilters } from "../controllers/series";

const router = Router();

router.get('/', getAllSeries)

router.get('/filter', getSeriesByFilters)

router.get('/:id', getSerialById)


export default router