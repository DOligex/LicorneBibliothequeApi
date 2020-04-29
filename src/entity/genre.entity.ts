import { Movie } from './movie.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity('genre')
export class Genre {

    @PrimaryGeneratedColumn({type: 'int'})
    id!: number;

    @CreateDateColumn({type: 'timestamp'})
    createAt!: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updateAt!: Date;

    @CreateDateColumn({type: 'timestamp'})
    deleteAt!: Date;

    @Column({type: 'varchar', length: 50})
    type!: string;

    @ManyToMany(type => Movie)
    @JoinTable()
    movies!: Movie[];

    // coté prototype
    // @ManyToOne(type => Performer, performer => performer.prototypes)
    // performers!: Performer;

}
