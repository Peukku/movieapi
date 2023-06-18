const mongoose = require('mongoose');
const dotenv = require('dotenv-flow');
const fs = require('fs');

dotenv.config();

mongoose.connect(`${process.env.DATABASE}`);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`ERROR - ${err.message}: ` + process.env.DATABASE);
});

const Movie = require('../src/models/Movie');

const movies = JSON.parse(fs.readFileSync(__dirname + '/movies-compact.json', 'utf-8'));

async function loadFixtures() {
    try {
        await Movie.deleteMany();
        await Movie.insertMany(movies);
        console.log("Fixture data loaded");
        process.exit();
    } catch(e) {
        console.log("Errr");
        console.log(e);
        process.exit();
    }
}

loadFixtures();