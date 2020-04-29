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

    @Column({type: 'varchar', length: 50})
    title!: string;
    // date de sortie
    @Column({type: 'timestamp'})
    released!: Date;

    @Column({type: 'int'})
    runtime!: number;

    @Column({type: 'varchar', length: 50})
    gender!: string;

    @Column({type: 'varchar', length: 50})
    director!: string;

    @Column({type: 'varchar', length: 50})
    writer!: string;

    @Column({type: 'varchar', length: 255})
    plot!: string;

    @Column({type: 'varchar', length: 25})
    country!: string;

    @Column({type: 'varchar', length: 150})
    awards!: string;

    @Column({type: 'varchar', length: 25})
    production!: string;

    @Column({type: 'boolean', default: false})
    response!: boolean;

    @Column({type: 'varchar', length: 255})
    poster!: string;

    @Column({type: 'int'})
    rating!: number;

    @Column({type: 'varchar', length: 100})
    comments!: string;

    @Column({type: 'boolean', default: false})
    warning!: boolean;

    @OneToMany(type => Movie, movie => movie.years)
    movies!: Movie[];

    // coté performer
    // @OneToMany(type => Prototype, prototype => prototype.performers)
    // prototypes!: Prototype[];
}
