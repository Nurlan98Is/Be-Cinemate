"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const favoriteSeries_controller_1 = require("../controllers/user/favoriteSeries.controller");
const users_controller_1 = require("../controllers/user/users.controller");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/me', authMiddleware_1.default, users_controller_1.getMyProfile);
router.post('/me/favorite-series', authMiddleware_1.default, favoriteSeries_controller_1.addFavoriteSeries);
router.delete('/me/favorite-series', authMiddleware_1.default, favoriteSeries_controller_1.removeFavoriteSeries);
router.get('/me/favorite-series', authMiddleware_1.default, favoriteSeries_controller_1.getFavoriteSeries);
router.get('/', users_controller_1.getUsers);
router.get('/:id', users_controller_1.getUserById);
exports.default = router;
