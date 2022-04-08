import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, Double } from 'typeorm';

@Entity({ name: 'clientes' })
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Timestamp;

    @CreateDateColumn()
    updated_at: Timestamp;

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

    @Column("integer")
    prazo_maximo_parcelamento: Number;

    @Column("double precision")
    desconto_maximo_acima_100_mil: Double;

    @Column("double precision")
    desconto_maximo_abaixo_igual_100_mil: Double;
    
    @Column("double precision")
    percentual_comissao: Double;
}