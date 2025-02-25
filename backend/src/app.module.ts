import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entidades
import { UserDB } from './Modelos/User/userDB';
import { BandaDB } from './Modelos/Banda/bandaDB';
import { InstrumentoDB } from './Modelos/Instrumento/instrumentoDB';
import { Usuario_bandaDB } from './Modelos/Usuario_banda/usuario_bandaDB';
import { Usuario_instrumentoDB } from './Modelos/Usuario_instrumento/usuario_instrumentoDB';

// Controladores y servicios
import { RegisterUserController } from './Controllers/User/Register/registerUser.controller';
import { RegisterUserService } from './Controllers/User/Register/registerUser.service';
import { ListerUsersController } from './Controllers/User/Get/listerUsers.controller';
import { ListerUsersService } from './Controllers/User/Get/listerUsers.service';
import { GetUserController } from './Controllers/User/Get/getUser.controller';
import { GetUserService } from './Controllers/User/Get/getUser.service';
import { DeleteUserController } from './Controllers/User/Delete/deleteUser.controller';
import { DeleteUserService } from './Controllers/User/Delete/deleteUser.service';
import { UpdateUserController } from './Controllers/User/Update/updateUser.controller';
import { UpdateUserService } from './Controllers/User/Update/updateUser.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'ftbm_app',
      entities: [
        UserDB,
        BandaDB,
        InstrumentoDB,
        Usuario_bandaDB,
        Usuario_instrumentoDB,
      ],
    }),
    TypeOrmModule.forFeature([
      UserDB,
      BandaDB,
      InstrumentoDB,
      Usuario_bandaDB,
      Usuario_instrumentoDB,
    ]),
  ],
  controllers: [
    RegisterUserController,
    ListerUsersController,
    GetUserController,
    DeleteUserController,
    UpdateUserController,
  ],
  providers: [
    RegisterUserService,
    ListerUsersService,
    GetUserService,
    DeleteUserService,
    UpdateUserService,
  ],
})
export class AppModule {}
