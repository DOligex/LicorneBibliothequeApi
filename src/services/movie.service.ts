import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.services';
import { MovieRepository } from '../repository/movie.repository';

export class MovieService extends AbstractService {

  protected repository = getCustomRepository(MovieRepository);

}
