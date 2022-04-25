import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, Double } from 'typeorm';

@Entity({ name: 'clientes' })
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Timestamp;

    @CreateDateColumn()
    updated_at: Timestamp;

    @Column({ type: 'varchar', length: 100 })
    nome: string;

    @Column({ type: 'varchar', length: 14 })
    cnpj: string;

    @Column({ type: 'varchar', length: 255 })
    endereco: string;

    @Column({ type: 'varchar', length: 20 })
    telefone: string;

    @Column({ type: 'varchar', length: 100 })
    email: string;

    @Column("integer")
    prazo_maximo_parcelamento: Number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    desconto_maximo_acima_100_mil: Double;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    desconto_maximo_abaixo_igual_100_mil: Double;
    
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    percentual_comissao: Double;
}