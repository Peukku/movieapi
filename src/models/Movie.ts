import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const personSchema = new mongoose.Schema({
    "firstName": String,
    "lastName": String
});

const movieSchema = new mongoose.Schema({
    "name": String,
    "year": Number,
    "genres": [String],
    "ageLimit": Number,
    "rating": Number,
    "actors": [personSchema],
    "director": personSchema,
    "synopsis": String
});

export const Movie = mongoose.model('Movie', movieSchema);
export const Person = mongoose.model('Person', personSchema);
