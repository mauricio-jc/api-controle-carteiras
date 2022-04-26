import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ClienteDevedor } from './cliente-devedor.entity';
import { ClientesDevedoresService } from './clientes-devedores.service';

@Controller('clientes-devedores')
export class ClientesDevedoresController {
    constructor(private readonly clientesDevedoresService: ClientesDevedoresService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getClientes() {
        return this.clientesDevedoresService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    getCliente(@Param('id') id: string) {
        return this.clientesDevedoresService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() clienteDevedor: ClienteDevedor) {
        const response = await this.clientesDevedoresService.create(clienteDevedor);
        
        if(HttpStatus.OK) {
            return {
                status: 'success',
                message: 'Devedor vinculado a um cliente com sucesso.',
                data: response
            };
        }
        else {
            return {
                status: 'error',
                message: 'Problemas ao vincular devedor ao cliente.',
                data: response
            };
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    async updateCliente(@Param('id') id: string, @Body() clienteDevedor: ClienteDevedor) {
        const response = await this.clientesDevedoresService.update(id, clienteDevedor);
        
        if(HttpStatus.OK) {
            return {
                status: 'success',
                message: 'Vínculo de devedor com o cliente atualizado com sucesso.',
                data: response
            };
        }
        else {
            return {
                status: 'error',
                message: 'Problemas ao atualizar o vínculo do devedor com o cliente.',
                data: response
            };
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    remove(@Param('id') id: string) {
        if(this.clientesDevedoresService.remove(id)) {
            return {
                status: 'success',
                message: 'Vínculo do devedor com o cliente excluído com sucesso.'
            };
        }
        else {
            return {
                status: 'error',
                message: 'Problemas ao excluir o vínculo do devedor com o cliente.',
            };
        }
    }
}