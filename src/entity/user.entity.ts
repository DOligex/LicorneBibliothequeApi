import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class User {

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

    @Column({type: 'varchar', length : 20})
    pseudo!: string;

    @CreateDateColumn({type: 'timestamp'})
    birthdate!: Date;

    @Column({type: 'varchar', length: 25})
    email!: string;

    @Column({type: 'varchar', length: 25})
    password!: string;

    @Column({type: 'varchar', length: 20})
    phone!: string;

    @Column({type: 'varchar', length: 255})
    avatar!: string;

    @Column({ type: 'boolean', default: false})
    activated!: boolean;

    @Column({ type: 'boolean', default: false})
    kid!: boolean;

    @Column({ type: 'boolean', default: false})
    teen!: boolean;

    @Column({ type: 'boolean', default: false})
    adult!: boolean;

    // admin user
    @Column({ type: 'varchar', length: 8})
    status!: string;

    // social media profil
    @Column({ type: 'varchar', length: 25})
    twitter!: string;

    @Column({ type: 'varchar', length: 25})
    fb!: string;

    @Column({ type: 'varchar', length: 25})
    insta!: string;

}
