import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn } from 'typeorm';

@Entity({ name: 'clientes' })
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cnpj: string;

    @Column()
    endereco: string;

    @Column()
    telefone: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Timestamp;

    @CreateDateColumn()
    updated_at: Timestamp;
}