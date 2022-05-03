import { Module } from '@nestjs/common';
import { DevedoresService } from './devedores.service';
import { DevedoresController } from './devedores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Devedor } from './devedor.entity';
import { ClienteDevedor } from 'src/clientes-devedores/cliente-devedor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Devedor, ClienteDevedor])],
    providers: [DevedoresService],
    controllers: [DevedoresController],
    exports: [TypeOrmModule]
})
export class DevedoresModule {}
