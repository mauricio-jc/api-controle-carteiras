import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteDevedor } from './cliente-devedor.entity';

@Injectable()
export class ClientesDevedoresService {
    constructor(
        @InjectRepository(ClienteDevedor) private clientesDevedoresRepository: Repository<ClienteDevedor>
    ) {}

    async findAll(): Promise<ClienteDevedor[]> {
        return await this.clientesDevedoresRepository.find();
    }

    findOne(id: string): Promise<ClienteDevedor> {
        return this.clientesDevedoresRepository.findOne(id);
    }

    async create(clienteDevedor: ClienteDevedor): Promise<ClienteDevedor> {    
        const response = await this.clientesDevedoresRepository.save(clienteDevedor);
        return response;
    }

    async update(id: string, clienteDevedor: ClienteDevedor): Promise<any> {    
        await this.clientesDevedoresRepository.update(id, clienteDevedor);
        return await this.clientesDevedoresRepository.findOne(id);
    }

    async remove(id: string): Promise<boolean> {
        const response = await this.clientesDevedoresRepository.delete(id);

        if(response) {
            return true;
        }
        else {
            return false;
        }
    }   
}