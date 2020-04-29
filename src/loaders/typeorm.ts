import { Genre } from './../entity/genre.entity';
import { Year } from './../entity/year.entity';
import { Actor } from './../entity/actor.entity';
import { Movie } from '../entity/movie.entity';
import { User } from '../entity/user.entity';
import { createConnection } from 'typeorm';

export default async () => {

await createConnection({
    type: 'mysql',
    host: process.env.DOLIGEX_UNICORN_API_HOST,
    // port: parseInt(process.env.DOLIGEX_UNICORN_API_PORT || '3306', 10),
    username: process.env.DOLIGEX_UNICORN_API_USER,
    password: process.env.DOLIGEX_UNICORN_API_PASSWORD,
    // database: process.env.UNICORN_API_DATABASE, // 'unicorn_library'
    database: 'unicorn_library',
    entities: [
        Actor,
        Genre,
        Movie,
        User,
        Year,
    ],
    synchronize: true,
    logging: false,
});
};
