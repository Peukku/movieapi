import { Router, Request, Response } from "express";
import MovieController from '@controllers/MovieController';

const router: Router = Router();
const movieController = new MovieController();

router.get('/', async (req: Request, res: Response) => {
    res.send('Home in routes')
})

router.get('/api/movie', movieController.getAllMovies);
router.get('/api/movie/:id', movieController.getMovieById);

export default router;