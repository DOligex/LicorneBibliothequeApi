import { Actor } from './../entity/actor.entity';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Actor)
export class ActorRepository extends Repository<Actor> {

}
