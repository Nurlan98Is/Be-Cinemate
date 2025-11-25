"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSerialById = exports.getAllSerials = void 0;
const serials_1 = require("../db/serials");
const getAllSerials = (req, res) => {
    serials_1.allArraySeries.length = 0;
    serials_1.allArraySeries.push(...serials_1.hboSeries, ...serials_1.fxPopularSeries, ...serials_1.netflixSeries);
    res.json(serials_1.allArraySeries);
};
exports.getAllSerials = getAllSerials;
const getSerialById = (req, res) => {
    const id = +req.params.id;
    console.log('serials id:', req.params);
    serials_1.allArraySeries.length = 0;
    serials_1.allArraySeries.push(...serials_1.hboSeries, ...serials_1.fxPopularSeries, ...serials_1.netflixSeries);
    const serial = serials_1.allArraySeries.find((series) => series.id === id);
    if (!serial) {
        return res.status(404).json({ message: "Сериал не найден" });
    }
    res.status(200).json(serial);
};
exports.getSerialById = getSerialById;
