"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeriesByFilters = exports.getSerialById = exports.getAllSeries = void 0;
const series_model_1 = __importDefault(require("../models/series.model"));
const mongoose_1 = require("mongoose");
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
    try {
        const result = await series_model_1.default.aggregate([
            {
                $match: { _id: new mongoose_1.Types.ObjectId(id) }
            },
            // Подтягиваем сезоны
            {
                $lookup: {
                    from: "seasons",
                    localField: "_id",
                    foreignField: "seriesId",
                    as: "seasons"
                }
            },
            // Подтягиваем эпизоды
            {
                $lookup: {
                    from: "episodes",
                    localField: "_id",
                    foreignField: "seriesId",
                    as: "allEpisodes"
                }
            },
            // Вложим эпизоды внутрь сезонов
            {
                $addFields: {
                    seasons: {
                        $map: {
                            input: "$seasons",
                            as: "season",
                            in: {
                                $mergeObjects: [
                                    "$$season",
                                    {
                                        episodes: {
                                            $filter: {
                                                input: "$allEpisodes",
                                                as: "ep",
                                                cond: { $eq: ["$$ep.seasonId", "$$season._id"] }
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            // Убираем временный массив allEpisodes
            {
                $project: {
                    allEpisodes: 0
                }
            }
        ]);
        if (!result.length) {
            return res.status(404).json({ message: "Сериал не найден" });
        }
        res.status(200).json(result[0]);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
    // const serial = await Series.findById(id);
    // const seasons = await Season.find({ seriesId: id})
    // const episodes = await Episode.find({ episodeId: '6929c4e74e2471a22af876ea'});
    // if (!serial) {
    //     return res.status(404).json({ message: "Сериал не найден" });
    // }
    // res.status(200).json({serial, seasons, episodes});
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
