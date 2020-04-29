import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.services';
import { ActorRepository } from '../repository/actor.repository';

export class ActorService extends AbstractService {

  protected repository = getCustomRepository(ActorRepository);

}
