import { Router, Request, Response } from "express";
import { addFavoriteSeries, removeFavoriteSeries, getFavoriteSeries } from "../controllers/user/favoriteSeries.controller";
import { getUsers, getUserById, getMyProfile } from "../controllers/user/users.controller";
import authMiddleware from "../middlewares/authMiddleware";
import { addToFriend, sendRequestToBeFrined } from "../controllers/user/friends.controller";

const router = Router();

router.get('/me', authMiddleware, getMyProfile);

router.post('/me/favorite-series', authMiddleware, addFavoriteSeries);

router.delete('/me/favorite-series', authMiddleware, removeFavoriteSeries);

router.get('/me/favorite-series', authMiddleware, getFavoriteSeries);

router.get('/', authMiddleware, getUsers);

router.get('/:id', getUserById);

router.post('/friends/sendRequest', authMiddleware, sendRequestToBeFrined);

router.post('/friends/addUser', authMiddleware, addToFriend)

export default router;