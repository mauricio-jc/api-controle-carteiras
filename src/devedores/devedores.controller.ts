import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Devedor } from './devedor.entity';
import { DevedoresService } from './devedores.service';

@Controller('devedores')
export class DevedoresController {
    constructor(private readonly devedoresService: DevedoresService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getDevedores() {
        return this.devedoresService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    getDevedor(@Param('id') id: string) {
        return this.devedoresService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() devedor: Devedor) {
        const response = await this.devedoresService.create(devedor);
        
        if(HttpStatus.OK) {
            return {
                status: 'success',
                message: 'Devedor cadastrado com sucesso.',
                data: response
            };
        }
        else {
            return {
                status: 'error',
                message: 'Problemas ao cadastrar devedor.',
                data: response
            };
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    async updateCliente(@Param('id') id: string, @Body() devedor: Devedor) {
        const response = await this.devedoresService.update(id, devedor);
        
        if(HttpStatus.OK) {
            return {
                status: 'success',
                message: 'Devedor atualizado com sucesso.',
                data: response
            };
        }
        else {
            return {
                status: 'error',
                message: 'Problemas ao atualizar devedor.',
                data: response
            };
        }
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    remove(@Param('id') id: string) {
        return this.devedoresService.remove(id);
    }    
}