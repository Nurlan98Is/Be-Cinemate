import { Schema, model } from "mongoose";
import { release } from "os";


const SeasonSchema = new Schema({
    seriesId: { type: Schema.Types.ObjectId, ref: 'Series', required: true },
    title: {
        original: { type: String, required: true},
        russian: { type: String, required: true}
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
    streaming: { type: String, required: true}
}, {
    timestamps: true
})

export default model('Season', SeasonSchema);