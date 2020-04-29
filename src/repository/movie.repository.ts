import { Movie } from './../entity/movie.entity';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {

}
