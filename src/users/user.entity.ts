import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 50 })
    username: string;

    @Column({ type: 'varchar', length: 100 })
    email: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @CreateDateColumn()
    created_at: Timestamp;

    @CreateDateColumn()
    updated_at: Timestamp;
}