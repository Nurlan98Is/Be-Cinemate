"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serilas_1 = require("../controllers/serilas");
const router = (0, express_1.Router)();
router.get('/', serilas_1.getAllSerials);
router.get('/:id', serilas_1.getSerialById);
exports.default = router;
