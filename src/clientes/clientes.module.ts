import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { Cliente } from './cliente.entity';
import { ClientesDevedoresService } from 'src/clientes-devedores/clientes-devedores.service';
import { ClienteDevedor } from 'src/clientes-devedores/cliente-devedor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cliente, ClienteDevedor])],
    providers: [ClientesService, ClientesDevedoresService],
    controllers: [ClientesController],
    exports: [TypeOrmModule]
})
export class ClientesModule {}
