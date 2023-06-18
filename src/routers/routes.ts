import { Router, Request, Response } from "express";
import MovieController from '@controllers/MovieController';

const router: Router = Router();
const movieController = new MovieController();

router.get('/', async (req: Request, res: Response) => {
    res.send('Why not try /api/movies ?')
})

router.get('/api/movies', movieController.getAllMovies);
router.get('/api/movies/:id', movieController.getMovieById);

router.post('/api/movies/', movieController.addMovie);
router.put('/api/movies/:id', movieController.updateMovie);
router.patch('/api/movies/:id', movieController.updateMovie);

router.delete('/api/movies/:id', movieController.deleteMovie);


export default router;