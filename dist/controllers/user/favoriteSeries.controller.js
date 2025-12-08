"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFavoriteSeries = exports.removeFavoriteSeries = exports.addFavoriteSeries = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const series_model_1 = __importDefault(require("../../models/series.model"));
const addFavoriteSeries = async (req, res) => {
    try {
        const userId = res.locals.user.id;
        const { seriesId } = req.body;
        const series = series_model_1.default.findById(seriesId);
        if (!series) {
            return res.status(404).send('Ресурс не найден');
        }
        const updateUser = await user_model_1.default.findByIdAndUpdate(userId, { $addToSet: { favoriteSeries: seriesId } }, { new: true }).populate('favoriteSeries');
        res.status(200).json(updateUser?.favoriteSeries);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.addFavoriteSeries = addFavoriteSeries;
const removeFavoriteSeries = async (req, res) => {
    try {
        const userId = res.locals.user.id;
        const { seriesId } = req.body;
        const series = series_model_1.default.findById(seriesId);
        if (!series) {
            res.status(404).send('Ресурс не найден');
            return;
        }
        const undateUser = await user_model_1.default.findByIdAndUpdate(userId, { $pull: { favoriteSeries: seriesId } }, { new: true }).populate('favoriteSeries');
        res.status(200).json(undateUser?.favoriteSeries);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.removeFavoriteSeries = removeFavoriteSeries;
const getFavoriteSeries = async (req, res) => {
    try {
        const userId = res.locals.user.id;
        const user = await user_model_1.default.findById(userId).populate('favoriteSeries');
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).json(user.favoriteSeries);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.getFavoriteSeries = getFavoriteSeries;
