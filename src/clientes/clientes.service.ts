import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteDevedor } from 'src/clientes-devedores/cliente-devedor.entity';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClientesService {
    constructor(
        @InjectRepository(Cliente) private clientesRepository: Repository<Cliente>,
        @InjectRepository(ClienteDevedor) private clienteDevedorRepository: Repository<ClienteDevedor>
    ) {}

    async findAll(): Promise<Cliente[]> {
        return await this.clientesRepository.find();
    }

    async findOne(id: string): Promise<Cliente> {
        return await this.clientesRepository.findOne(id);
    }

    async create(cliente: Cliente): Promise<Cliente> {    
        const response = await this.clientesRepository.save(cliente);
        return response;
    }

    async update(id: string, cliente: Cliente): Promise<any> {    
        await this.clientesRepository.update(id, cliente);
        return await this.clientesRepository.findOne(id);
    }

    async remove(id: string): Promise<any> {
        const hasDebit = await this.clientHasDebit(Number(id));

        if(!hasDebit) {
            const response = await this.clientesRepository.delete(id);

            if(response) {
                return {
                    status: 'success',
                    message: 'Cliente excluído com sucesso.'
                }
            }
            else {
                return {
                    status: 'error',
                    message: 'Problemas ao excluir cliente.'
                }
            }
        }
        else {
            return {
                status: 'error',
                message: 'Não foi possível excluir, pois este cliente tem vínculo com débitos de devedores.'
            }
        }
    }

    async clientHasDebit(clientId: number): Promise<boolean> {
        const hasDebit = await this.clienteDevedorRepository.find({
            where: {
                cliente: clientId
            }
        });

        if(hasDebit.length == 0) {
            return false;
        }
        else {
            return true;
        }
    }
}