"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeriesByFilters = exports.getSerialById = exports.getAllSeries = void 0;
const series_model_1 = __importDefault(require("../models/series.model"));
const getAllSeries = async (req, res) => {
    try {
        const allSeries = await series_model_1.default.find();
        res.status(200).json(allSeries);
    }
    catch (error) {
        console.error("Server error", error);
        res.status(500).send('Server error');
    }
};
exports.getAllSeries = getAllSeries;
const getSerialById = async (req, res) => {
    const id = req.params.id;
    const serial = await series_model_1.default.findById(id);
    if (!serial) {
        return res.status(404).json({ message: "Сериал не найден" });
    }
    res.status(200).json(serial);
};
exports.getSerialById = getSerialById;
const getSeriesByFilters = async (req, res) => {
    const { source, genre } = req.query;
    try {
        const filter = {};
        if (source)
            filter.source = source;
        if (genre)
            filter.genre = { $in: [genre] };
        const series = await series_model_1.default.find(filter);
        res.status(200).json(series);
    }
    catch (error) {
        console.error("Server error", error);
        res.status(500).send('Server error');
    }
};
exports.getSeriesByFilters = getSeriesByFilters;
