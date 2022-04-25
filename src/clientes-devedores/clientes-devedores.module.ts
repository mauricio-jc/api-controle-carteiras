import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesDevedoresService } from './clientes-devedores.service';
import { ClientesDevedoresController } from './clientes-devedores.controller';
import { ClienteDevedor } from './cliente-devedor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ClienteDevedor])],
    providers: [ClientesDevedoresService],
    controllers: [ClientesDevedoresController],
    exports: [TypeOrmModule]
})
export class ClientesDevedoresModule {}