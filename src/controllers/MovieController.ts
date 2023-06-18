import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Movie } from '@/models/Movie';

class MovieController {
    public getAllMovies = async (req: Request, res: Response) => {
        var query: Object = {};
        if (req.query.q) {
            query = {
                $text: {
                    $search: req.query.q
                }
            };
        }

        const movies = await Movie.find(query, 'name year genres director');

        res.json(movies);
    }

    public getMovieById = async (req: Request, res: Response) => {
        try {
            const movie = await Movie.findById(req.params.id);
            res.json(movie);
        } catch (e) {
            res.sendStatus(404);
        }

    }

    public addMovie = async (req: Request, res: Response) => {
        const movie = new Movie(req.body);
        await movie.save();
        res.json(movie);
    }

    public updateMovie = async (req: Request, res: Response) => {
        // Todo:
        // find by id 
        // if PUT, clear existing content
        // update with req.body
        // save, respond with 204

        res.sendStatus(401);
    }

    public deleteMovie = async (req: Request, res: Response) => {
        try {
            const movie = await Movie.findById(req.params.id);
            movie?.deleteOne();
            res.sendStatus(200);
        } catch (e) {
            res.sendStatus(404);
        }
    }
}

export default MovieController;