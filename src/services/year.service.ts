import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.services';
import { YearRepository } from '../repository/year.repository';

export class YearService extends AbstractService {

  protected repository = getCustomRepository(YearRepository);

}
