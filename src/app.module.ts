import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ClientesModule } from './clientes/clientes.module';
import { User } from './users/user.entity';
import { Cliente } from './clientes/cliente.entity';
import { CarteirasModule } from './carteiras/carteiras.module';
import { Carteira } from './carteiras/carteira.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'admin',
            database: 'projeto',
            entities: [
                User,
                Cliente,
                Carteira
            ],
            synchronize: true,
        }),
        UsersModule,
        AuthModule,
        ClientesModule,
        CarteirasModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}