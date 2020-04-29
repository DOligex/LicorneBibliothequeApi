import { Genre } from './genre.entity';
import { Actor } from './actor.entity';
import { Year } from './year.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity('movie')
export class Movie {

    @PrimaryGeneratedColumn({type: 'int'})
    id!: number;

    @CreateDateColumn({type: 'timestamp'})
    createAt!: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updateAt!: Date;

    @CreateDateColumn({type: 'timestamp'})
    deleteAt!: Date;

    @Column({type: 'varchar', length: 50})
    title!: string;

    // date de sortie
    @Column({type: 'varchar'})
    released!: string;

    // durée
    @Column({type: 'int'})
    runtime!: number;

    @Column({type: 'varchar', length: 50})
    gender!: string;

    // réalisateur
    @Column({type: 'varchar', length: 50})
    director!: string;

    // scénariste / scénario
    @Column({type: 'varchar', length: 50})
    writer!: string;

    // triptique
    @Column({type: 'varchar', length: 255})
    plot!: string;

    @Column({type: 'varchar', length: 25})
    country!: string;

    // récompenses
    @Column({type: 'varchar', length: 150})
    awards!: string;

    // studio
    @Column({type: 'varchar', length: 100})
    production!: string;

    // booléen de réserve
    @Column({type: 'boolean', default: false})
    response!: boolean;

    // affiche du film
    @Column({type: 'varchar', length: 255})
    poster!: string;

    // évaluation / note
    @Column({type: 'int'})
    ratting!: number;

    @Column({type: 'varchar', length: 100})
    comments!: string;

    // modération adultes
    @Column({type: 'boolean', default: false})
    warning!: boolean;

    @Column({type: 'varchar', length: 255})
    trailer!: string;

    @ManyToOne(type => Year, year => year.movies)
    years!: Year;

    @ManyToMany(type => Actor)
    @JoinTable()
    actors!: Actor[];

    @ManyToMany(type => Genre)
    @JoinTable()
    genres!: Genre[];

    // coté prototype
    // @ManyToOne(type => Performer, performer => performer.prototypes)
    // performers!: Performer;

}
