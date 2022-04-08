import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Carteira } from './carteira.entity';
import { CarteirasService } from './carteiras.service';

@Controller('carteiras')
export class CarteirasController {
    constructor(private readonly carteirasService: CarteirasService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getCarteiras() {
        return this.carteirasService.findAll();
    }

    // @UseGuards(JwtAuthGuard)
    // @Get('/:id')
    // getCliente(@Param('id') id: string) {
    //     return this.clientesService.findOne(id);
    // }

    // @UseGuards(JwtAuthGuard)
    // @Post()
    // async create(@Body() cliente: Cliente) {
    //     const response = await this.clientesService.create(cliente);
        
    //     if(HttpStatus.OK) {
    //         return {
    //             status: 'success',
    //             message: 'Cliente cadastrado com sucesso.',
    //             data: response
    //         };
    //     }
    //     else {
    //         return {
    //             status: 'error',
    //             message: 'Problemas ao cadastrar cliente.',
    //             data: response
    //         };
    //     }
    // }

    // @UseGuards(JwtAuthGuard)
    // @Put('/:id')
    // async updateCliente(@Param('id') id: string, @Body() cliente: Cliente) {
    //     const response = await this.clientesService.update(id, cliente);
        
    //     if(HttpStatus.OK) {
    //         return {
    //             status: 'success',
    //             message: 'Cliente atualizado com sucesso.',
    //             data: response
    //         };
    //     }
    //     else {
    //         return {
    //             status: 'error',
    //             message: 'Problemas ao atualizar cliente.',
    //             data: response
    //         };
    //     }
    // }
    
    // @UseGuards(JwtAuthGuard)
    // @Delete('/:id')
    // remove(@Param('id') id: string) {
    //     if(this.clientesService.remove(id)) {
    //         return {
    //             status: 'success',
    //             message: 'Cliente excluído com sucesso.'
    //         };
    //     }
    //     else {
    //         return {
    //             status: 'error',
    //             message: 'Problemas ao excluir cliente.',
    //         };
    //     }
    // }
}