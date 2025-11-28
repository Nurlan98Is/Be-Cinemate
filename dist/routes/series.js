"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const series_1 = require("../controllers/series");
const router = (0, express_1.Router)();
router.get('/', series_1.getAllSeries);
router.get('/filter', series_1.getSeriesByFilters);
router.get('/:id', series_1.getSerialById);
exports.default = router;
