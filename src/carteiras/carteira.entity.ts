import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn } from 'typeorm';

@Entity({ name: 'carteiras' })
export class Carteira {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Timestamp;

    @CreateDateColumn()
    updated_at: Timestamp;

    @Column()
    nome: string;

    @Column()
    cpf_cnpj: string;

    @Column()
    endereco: string;

    @Column()
    telefone: string;

    @Column()
    email: string;
}