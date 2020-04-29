import { Genre } from './../entity/genre.entity';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Genre)
export class GenreRepository extends Repository<Genre> {

}
