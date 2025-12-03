"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EpisodeSchema = new mongoose_1.Schema({
    seriesId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Series', required: true },
    seasonId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Season', required: true },
    title: {
        original: { type: String, required: true },
        russian: { type: String, required: true }
    },
    episodeNumber: { type: Number, required: true },
    seasonNumber: { type: Number, required: true },
    duration: { type: Number, required: true }, // duration in minutes
    description: { type: String, required: true },
    guestCast: [{ type: String }],
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Episode', EpisodeSchema);
