import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.services';
import { GenreRepository } from '../repository/genre.repository';

export class GenreService extends AbstractService {

  protected repository = getCustomRepository(GenreRepository);

}
