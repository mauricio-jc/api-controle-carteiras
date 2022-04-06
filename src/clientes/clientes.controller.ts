import { Body, Controller, Get, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Cliente } from './cliente.entity';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
    constructor(private readonly clientesService: ClientesService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getClientes() {
        return this.clientesService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    getCliente(@Param('id') id: string) {
        return this.clientesService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() cliente: Cliente) {
        const response = await this.clientesService.create(cliente);
        
        if(HttpStatus.OK) {
            return {
                status: 'success',
                message: 'Cliente cadastrado com sucesso.',
                data: response
            };
        }
        else {
            return {
                status: 'error',
                message: 'Problemas ao cadastrar cliente.',
                data: response
            };
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    async updateCliente(@Param('id') id: string, @Body() cliente: Cliente) {
        const response = await this.clientesService.update(id, cliente);
        
        if(HttpStatus.OK) {
            return {
                status: 'success',
                message: 'Cliente atualizado com sucesso.',
                data: response
            };
        }
        else {
            return {
                status: 'error',
                message: 'Problemas ao atualizar cliente.',
                data: response
            };
        }
    }
}
