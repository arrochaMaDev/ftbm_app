import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserService } from './registerUser.service';
import { RegisterUserDto } from './registerUser.dto';

@Controller('usuario')
export class RegisterUserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post()
  async registerUser(@Body() data: RegisterUserDto) {
    try {
      const {
        nombre,
        apellidos,
        dni,
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
      throw new Error('No se pudo crear el usuario');
    }
  }
}
