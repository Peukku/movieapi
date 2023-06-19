import { Router, Request, Response } from "express";
import MovieController from '@/controllers/MovieController';
import { catchErrors } from '@/handlers/errorHandlers';

const router: Router = Router();
const movieController = new MovieController();

router.get('/', async (req: Request, res: Response) => {
    res.send('Why not try /api/movies ?')
})

router.get('/api/movies', catchErrors(movieController.getAllMovies));
router.get('/api/movies/:id', catchErrors(movieController.getMovieById));

router.post('/api/movies/', catchErrors(movieController.addMovie));
router.put('/api/movies/:id', catchErrors(movieController.updateMovie));
router.patch('/api/movies/:id', catchErrors(movieController.updateMovie));

router.delete('/api/movies/:id', catchErrors(movieController.deleteMovie));

export default router;