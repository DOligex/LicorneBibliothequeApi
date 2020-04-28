import { Movie } from '../entity/movie.entity';
import { createConnection } from 'typeorm';
import { User } from '../entity/user.entity';

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
        User,
        Movie,
    ],
    synchronize: true,
    logging: false,
});
};
