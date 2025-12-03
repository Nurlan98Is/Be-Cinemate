
import { Schema, model } from "mongoose";

const EpisodeSchema = new Schema({
    seriesId: { type: Schema.Types.ObjectId, ref: 'Series', required: true },
    seasonId: { type: Schema.Types.ObjectId, ref: 'Season', required: true },
    title: {
        original: { type: String, required: true},
        russian: { type: String, required: true}
    },
    episodeNumber: { type: Number, required: true },
    seasonNumber: {type: Number, required: true },
    duration: { type: Number, required: true }, // duration in minutes
    description: { type: String, required: true },
    guestCast: [{ type: String }],
}, {
    timestamps: true
})

export default model('Episode', EpisodeSchema);