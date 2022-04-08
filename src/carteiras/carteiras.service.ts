import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carteira } from './carteira.entity';

@Injectable()
export class CarteirasService {
    constructor(
        @InjectRepository(Carteira) private carteirasRepository: Repository<Carteira>
    ) {}

    async findAll(): Promise<Carteira[]> {
        return await this.carteirasRepository.find();
    }

    // findOne(id: string): Promise<Cliente> {
    //     return this.clientesRepository.findOne(id);
    // }

    async create(carteira: Carteira): Promise<Carteira> {    
        const response = await this.carteirasRepository.save(carteira);
        return response;
    }

    // async update(id: string, cliente: Cliente): Promise<any> {    
    //     await this.clientesRepository.update(id, cliente);
    //     return await this.clientesRepository.findOne(id);
    // }

    // async remove(id: string): Promise<boolean> {
    //     const response = await this.clientesRepository.delete(id);

    //     if(response) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
}