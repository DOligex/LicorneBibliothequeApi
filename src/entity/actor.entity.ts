import { Movie } from './movie.entity';
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, Column, JoinTable, ManyToMany } from 'typeorm';

@Entity('actor')
export class Actor {

    @PrimaryGeneratedColumn({type: 'int'})
    id!: number;

    @CreateDateColumn({type: 'timestamp'})
    createAt!: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updateAt!: Date;

    @CreateDateColumn({type: 'timestamp'})
    deleteAt!: Date;

    @Column({type: 'varchar', length: 20})
    firstname!: string;

    @Column({type: 'varchar', length: 20})
    lastname!: string;

    @Column({type: 'varchar', length: 20})
    pseudo!: string;

    @CreateDateColumn({type: 'timestamp'})
    birthdate!: Date;

    @Column({type: 'varchar', length: 20})
    nationality!: string;

    @Column({type: 'varchar', length: 75})
    citation!: string;

    @Column({type: 'varchar', length: 255})
    photo!: string;

    @ManyToMany(type => Movie)
    @JoinTable()
    movies!: Movie[];
}
