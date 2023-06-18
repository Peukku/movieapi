import { Request, Response } from 'express';

class MovieController {
    public getAllMovies = async (req: Request, res: Response) => {
        res.send('all movies...');
    }

    public getMovieById = async (req: Request, res: Response) => {
        res.json(req.params);
    }
}

export default MovieController;