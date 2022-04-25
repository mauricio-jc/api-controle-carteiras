import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ClientesModule } from './clientes/clientes.module';
import { User } from './users/user.entity';
import { Cliente } from './clientes/cliente.entity';
import { DevedoresModule } from './devedores/devedores.module';
import { Devedor } from './devedores/devedor.entity';
import { ClientesDevedoresModule } from './clientes-devedores/clientes-devedores.module';
import { ClienteDevedor } from './clientes-devedores/cliente-devedor.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

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
                Devedor,
                ClienteDevedor
            ],
            synchronize: true,
            namingStrategy: new SnakeNamingStrategy()
        }),
        UsersModule,
        AuthModule,
        ClientesModule,
        DevedoresModule,
        ClientesDevedoresModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

/*
create table cliente_devedores(
	id serial primary key not null,
	created_at timestamp,
	updated_at timestamp,
	motivo_debito varchar(255) not null,
	montante_original double precision not null,
	valor_atualizado double precision not null,
	cliente_id int not null,
	devedor_id int not null,
	foreign key(cliente_id) references clientes(id) on delete cascade,
	foreign key(devedor_id) references devedores(id) on delete cascade
);
*/