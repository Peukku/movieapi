import { text } from 'body-parser';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const personSchema = new mongoose.Schema({
    "firstName": { type: String, trim: true },
    "lastName": { type: String, required: true, trim: true }
});

const movieSchema = new mongoose.Schema({
    "name": { type: String, required: true, trim: true },
    "year": { type: Number, required: true },
    "genres": { type: [String], required: false, trim: true },
    "ageLimit": Number,
    "rating": Number,
    "actors": [{ type: personSchema, required: false }],
    "director": personSchema,
    "synopsis": { type: String, trim: true }
});

movieSchema.index({
    name: 'text',
    synopsis: 'text'
});

export const Movie = mongoose.model('Movie', movieSchema);