import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Post,
} from '@nestjs/common';
import { RegisterUserService } from './registerUser.service';
import { RegisterUserDto } from './registerUser.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('usuario')
@ApiTags('User')
export class RegisterUserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post()
  @ApiOperation({ summary: 'Este endpoint permite crear un usuario' })
  @ApiResponse({ status: 201, description: 'Usuario creado correctamente' })
  @ApiResponse({ status: 404, description: 'No se encontró el usuario' })
  @ApiResponse({
    status: 500,
    description: 'Ha ocurrido un error en el servidor',
  })
  async registerUser(@Body() data: RegisterUserDto) {
    try {
      const {
        nombre,
        apellidos,
        dni,
        fecha_nacimiento,
        direccion,
        telefono,
        foto,
        email,
        password,
        es_admin,
        activo_musico,
        activo_directivo,
        acepta_bolsa_refuerzos,
        acepta_bolsa_profesores,
        acepta_bolsa_banda_insular,
        acepta_comunicaciones_email,
        numero_federado,
        fecha_registro,
      } = data;

      const userData = await this.registerUserService.createUser(
        nombre,
        apellidos,
        dni,
        fecha_nacimiento,
        direccion,
        telefono,
        foto,
        email,
        password,
        es_admin,
        activo_musico,
        activo_directivo,
        acepta_bolsa_refuerzos,
        acepta_bolsa_profesores,
        acepta_bolsa_banda_insular,
        acepta_comunicaciones_email,
        numero_federado,
        fecha_registro,
      );

      const user = {
        id: userData.usuario_id,
        nombre: userData.nombre,
        apellidos: userData.apellidos,
        dni: userData.dni,
        fecha_nacimiento: userData.fecha_nacimiento,
        direccion: userData.direccion,
        telefono: userData.telefono,
        foto: userData.foto,
        email: userData.email,
        password: userData.password,
        numero_federado: userData.numero_federado,
        fecha_registro: userData.fecha_registro,
        es_admin: userData.email,
        activo_musico: userData.activo_musico,
        activo_directivo: userData.activo_directivo,
        acepta_bolsa_refuerzos: userData.acepta_bolsa_refuerzos,
        acepta_bolsa_profesores: userData.acepta_bolsa_profesores,
        acepta_bolsa_banda_insular: userData.acepta_bolsa_banda_insular,
        acepta_comunicaciones_email: userData.acepta_comunicaciones_email,
      };
      return user;
    } catch (error) {
      console.error('Error al crear el usuario', error);
      if (error instanceof ConflictException) {
        throw new BadRequestException(error.message);
      }
      throw new Error('No se pudo crear el usuario');
    }
  }
}
