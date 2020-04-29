import { Application, Router } from 'express';
import { commonController } from '../core/common_functions.controller';
import { GenreService } from '../services/genre.service';

export const GenreController = (app: Application) => {

    const genreService = new GenreService();

    let genreRouter = Router();

    genreRouter = commonController(genreService, genreRouter);

    app.use('/genres', genreRouter);

  };
