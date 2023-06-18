import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Movie, Person } from '@/models/Movie';

class MovieController {
    public getAllMovies = async (req: Request, res: Response) => {
        const movies = await Movie.find({}, 'name year genres director');

        res.json(movies);
    }

    public getMovieById = async (req: Request, res: Response) => {
        const movie = await Movie.findById(req.params.id);

        res.json(movie);
    }
}

export default MovieController;