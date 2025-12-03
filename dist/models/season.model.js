"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SeasonSchema = new mongoose_1.Schema({
    seriesId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Series', required: true },
    title: {
        original: { type: String, required: true },
        russian: { type: String, required: true }
    },
    seasonNumber: { type: Number, required: true },
    releaseDate: { type: Date, required: true },
    numberOfEpisodes: { type: Number, required: true },
    description: { type: String, required: true },
    genre: [{ type: String }],
    showRunner: { type: String },
    mainCast: [{ type: String, required: true }],
    notableFacts: [{ type: String }],
    source: { type: String, required: true },
    streaming: { type: String, required: true }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Season', SeasonSchema);
