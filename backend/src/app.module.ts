import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entidades
import { UserDB } from './Modelos/Usuario/userDB';
import { BandaDB } from './Modelos/Banda/bandaDB';
import { InstrumentoDB } from './Modelos/Instrumento/instrumentoDB';
import { Usuario_bandaDB } from './Modelos/Usuario_banda/usuario_bandaDB';
import { Usuario_instrumentoDB } from './Modelos/Usuario_instrumento/usuario_instrumentoDB';

// Controladores y servicios
import { RegisterUserController } from './Controllers/Usuario/Register/registerUser.controller';
import { RegisterUserService } from './Controllers/Usuario/Register/registerUser.service';
import { ListerUsersController } from './Controllers/Usuario/Get/listerUsers.controller';
import { ListerUsersService } from './Controllers/Usuario/Get/listerUsers.service';
import { GetUserController } from './Controllers/Usuario/Get/getUser.controller';
import { GetUserService } from './Controllers/Usuario/Get/getUser.service';
import { DeleteUserController } from './Controllers/Usuario/Delete/deleteUser.controller';
import { DeleteUserService } from './Controllers/Usuario/Delete/deleteUser.service';
import { UpdateUserController } from './Controllers/Usuario/Update/updateUser.controller';
import { UpdateUserService } from './Controllers/Usuario/Update/updateUser.service';
import { RegisterBandaController } from './Controllers/Banda/Register/registerBanda.controller';
import { RegisterBandaService } from './Controllers/Banda/Register/registerBanda.service';
import { ListerBandasService } from './Controllers/Banda/Get/listerBandas.service';
import { ListerBandasController } from './Controllers/Banda/Get/listerBandas.controller';
import { GetBandaController } from './Controllers/Banda/Get/getBanda.controller';
import { GetBandaService } from './Controllers/Banda/Get/getBanda.service';

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
    RegisterBandaController,
    ListerBandasController,
    GetBandaController,
  ],
  providers: [
    RegisterUserService,
    ListerUsersService,
    GetUserService,
    DeleteUserService,
    UpdateUserService,
    RegisterBandaService,
    ListerBandasService,
    GetBandaService,
  ],
})
export class AppModule {}
