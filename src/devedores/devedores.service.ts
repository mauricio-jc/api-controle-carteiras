import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Devedor } from './devedor.entity';

@Injectable()
export class DevedoresService {
    constructor(
        @InjectRepository(Devedor) private devedoresRepository: Repository<Devedor>
    ) {}

    async findAll(): Promise<Devedor[]> {
        return await this.devedoresRepository.find();
    }

    findOne(id: string): Promise<Devedor> {
        return this.devedoresRepository.findOne(id);
    }

    async create(devedor: Devedor): Promise<Devedor> {    
        const response = await this.devedoresRepository.save(devedor);
        return response;
    }

    async update(id: string, devedor: Devedor): Promise<any> {    
        await this.devedoresRepository.update(id, devedor);
        return await this.devedoresRepository.findOne(id);
    }

    async remove(id: string): Promise<boolean> {
        const response = await this.devedoresRepository.delete(id);

        if(response) {
            return true;
        }
        else {
            return false;
        }
    }

}