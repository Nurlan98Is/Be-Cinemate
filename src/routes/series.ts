import { Router } from "express";
import { getAllSeries, getSerialById, getSeriesByFilters } from "../controllers/series";
import { getReview } from "../controllers/user/reviews.controller";

const router = Router();

router.get('/', getAllSeries)

router.get('/filter', getSeriesByFilters)

router.get('/:id', getSerialById)

router.get('/getReview/:id', getReview)

export default router