import { Application, Router } from 'express';
import { commonController } from '../core/common_functions.controller';
import { MovieService } from '../services/movie.service';

export const MovieController = (app: Application) => {

    const movieService = new MovieService();

    let movieRouter = Router();

    movieRouter = commonController(movieService, movieRouter);

    app.use('/movies', movieRouter);

  };
