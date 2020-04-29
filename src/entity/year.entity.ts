import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Actor } from './actor.entity';
import { Movie } from './movie.entity';

@Entity('year')
export class Year {

    @PrimaryGeneratedColumn({type: 'int'})
    id!: number;

    @CreateDateColumn({type: 'timestamp'})
    createAt!: Date;

    @UpdateDateColumn({type: 'timestamp'})
    uodateAt!: Date;

    @CreateDateColumn({type: 'timestamp'})
    delateAt!: Date;

    @Column({type: 'timestamp'})
    year!: Date;

    @OneToMany(type => Movie, movie => movie.years)
    movies!: Movie[];

    // coté performer
    // @OneToMany(type => Prototype, prototype => prototype.performers)
    // prototypes!: Prototype[];
}
