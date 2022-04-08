import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarteirasController } from './carteiras.controller';
import { CarteirasService } from './carteiras.service';
import { Carteira } from './carteira.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Carteira])],
    controllers: [CarteirasController],
    providers: [CarteirasService],
    exports: [TypeOrmModule]
})
export class CarteirasModule {}
