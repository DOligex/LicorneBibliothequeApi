import { YearController } from './controller/year.controller';
import { MovieController } from './controller/movie.controller';
import { GenreController } from './controller/genre.controller';
import { ActorController } from './controller/actor.controller';
import { UserController } from './controller/user.controller';

import 'reflect-metadata';
import express from 'express';
import loaders from './loaders';

async function startServer() {
    // Récupération de l'application initiale
    const app = express();

    // Chargement des différents loader
    await loaders(app);

    // Ajout des différentes route de votre application
    ActorController(app);
    GenreController(app);
    MovieController(app);
    UserController(app);
    YearController(app);

    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3000, () => console.log('Express server  is running'));
  }

startServer();
