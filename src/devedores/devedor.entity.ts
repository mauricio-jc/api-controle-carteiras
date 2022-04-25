import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn } from 'typeorm';

@Entity({ name: 'devedores' })
export class Devedor {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Timestamp;

    @CreateDateColumn()
    updated_at: Timestamp;

    @Column({ type: 'varchar', length: 100 })
    nome: string;

    @Column({ type: 'varchar', length: 14 })
    cpf_cnpj: string;

    @Column({ type: 'varchar', length: 255 })
    endereco: string;

    @Column({ type: 'varchar', length: 20 })
    telefone: string;

    @Column({ type: 'varchar', length: 100 })
    email: string;
}