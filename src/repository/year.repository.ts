import { Year } from './../entity/year.entity';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Year)
export class YearRepository extends Repository<Year> {

}
