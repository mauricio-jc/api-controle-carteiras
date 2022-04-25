import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, Double, ManyToOne } from 'typeorm';
import { Cliente } from 'src/clientes/cliente.entity';
import { Devedor } from 'src/devedores/devedor.entity';

@Entity({ name: 'clientes_devedores' })
export class ClienteDevedor {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Timestamp;

    @CreateDateColumn()
    updated_at: Timestamp;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    motivo_debito: Double;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    montante_original: Double;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    valor_atualizado: Double;

    @ManyToOne(() => Cliente, (cliente) => cliente.clienteDevedor, {
        nullable: false
    })
    cliente: Cliente;

    @ManyToOne(() => Devedor, (devedor) => devedor.clienteDevedor, {
        nullable: false
    })
    devedor: Devedor;
}