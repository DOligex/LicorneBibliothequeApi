import { Application, Router } from 'express';
import { commonController } from '../core/common_functions.controller';
import { YearService } from '../services/year.service';

export const YearController = (app: Application) => {

    const yearService = new YearService();

    let yearRouter = Router();

    yearRouter = commonController(yearService, yearRouter);

    app.use('/years', yearRouter);

  };
