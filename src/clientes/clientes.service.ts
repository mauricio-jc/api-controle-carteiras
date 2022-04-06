import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClientesService {
    constructor(
        @InjectRepository(Cliente) private clientesRepository: Repository<Cliente>
    ) {}

    async findAll(): Promise<Cliente[]> {
        return await this.clientesRepository.find();
    }

    findOne(id: string): Promise<Cliente> {
        return this.clientesRepository.findOne(id);
    }

    async create(cliente: Cliente): Promise<Cliente> {    
        const response = await this.clientesRepository.save(cliente);
        return response;
    }

    async update(id: string, cliente: Cliente): Promise<any> {    
        await this.clientesRepository.update(id, cliente);
        return await this.clientesRepository.findOne(id);
    }

    async remove(id: string): Promise<boolean> {
        const response = await this.clientesRepository.delete(id);

        if(response) {
            return true;
        }
        else {
            return false;
        }
    }
}