import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteDevedor } from 'src/clientes-devedores/cliente-devedor.entity';
import { Repository } from 'typeorm';
import { Devedor } from './devedor.entity';

@Injectable()
export class DevedoresService {
    constructor(
        @InjectRepository(Devedor) private devedoresRepository: Repository<Devedor>,
        @InjectRepository(ClienteDevedor) private clienteDevedorRepository: Repository<ClienteDevedor>
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

    async remove(id: string): Promise<any> {
        const hasDebit = await this.devedorHasDebit(Number(id));

        if(!hasDebit) {
            const response = await this.devedoresRepository.delete(id);

            if(response) {
                return {
                    status: 'success',
                    message: 'Devedor excluído com sucesso.'
                }
            }
            else {
                return {
                    status: 'error',
                    message: 'Problemas ao excluir devedor.'
                }
            }
        }
        else {
            return {
                status: 'error',
                message: 'Não foi possível excluir, pois este devedor tem vínculo com débitos de devedores.'
            }
        }
    }

    async devedorHasDebit(devedorId: number): Promise<boolean> {
        const hasDebit = await this.clienteDevedorRepository.find({
            where: {
                devedor: devedorId
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