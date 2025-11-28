import { Schema, model, ObjectId } from "mongoose";

const SeriesSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    title: {
      original: { type: String, required: true },
      russian: { type: String, required: true }
    },
    image: { type: String, required: true },
    genre: [{ type: String }],
    years: {
      start: { type: Number, required: true },
      end: { type: Number, default: null },
      status: { type: String, required: true }
    },
    seasons: { type: Number, required: true },
    episodes: { type: Number, required: true },
    description: { type: String, required: true },
    creators: [{ type: String }],
    imdbRating: { type: Number },
    awards: [{ type: String }],
    cast: {
      type: Map,
      of: [String],
      default: {}
    },
    streaming: { type: String },
    notable: { type: String },
    setting: {
      location: { type: String },
      timePeriod: { type: String },
      historicalContext: { type: String }
    },
    mainCharacters: {
      type: Map,
      of: new Schema({
        name: { type: String },
        description: { type: String }
      }),
      default: {}
    },
    criticalReception: {
      rating: { type: String },
      highlights: [{ type: String }],
      criticisms: [{ type: String }]
    }
  }, { timestamps: true });
  
  export default model("Series", SeriesSchema);