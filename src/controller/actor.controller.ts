import { Application, Router } from 'express';
import { ActorService } from '../services/actor.service';
import { commonController } from '../core/common_functions.controller';

export const ActorController = (app: Application) => {

    const actorService = new ActorService();

    let actorRouter = Router();

    actorRouter = commonController(actorService, actorRouter);

    app.use('/actors', actorRouter);

  };
