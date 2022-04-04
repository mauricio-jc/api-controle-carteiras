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

    async create(cliente: Cliente): Promise<Cliente> {    
        const response = await this.clientesRepository.save(cliente);
        return response;
    }
}