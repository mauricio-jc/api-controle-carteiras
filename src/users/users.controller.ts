import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async register(@Body() user: User) {
        const saltOrRounds = 10;
        user.password = await bcrypt.hash(user.password, saltOrRounds);
        const response = await this.usersService.register(user);
        
        if(HttpStatus.OK) {
            return {
                status: 'success',
                message: 'Registro efetuado com sucesso.',
                data: response
            };
        }
        else {
            return {
                status: 'error',
                message: 'Problemas ao efetuar registro.',
                data: response
            };
        }
    }

    @Get()
    async findAll() {
        return this.usersService.findAll();
    }
}