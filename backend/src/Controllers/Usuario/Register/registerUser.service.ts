import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDB } from 'src/Modelos/Usuario/userDB';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { User } from 'src/Modelos/Usuario/user';

@Injectable()
export class RegisterUserService {
  constructor(
    @InjectRepository(UserDB)
    private readonly userRepository: Repository<UserDB>,
  ) {}

  async createUser(
    nombre: string,
    apellidos: string,
    dni: string,
    fecha_nacimiento: Date,
    direccion: string,
    telefono: number,
    foto: string,
    email: string,
    password: string,
    es_admin: boolean,
    activo_musico: boolean,
    activo_directivo: boolean,
    acepta_bolsa_refuerzos: boolean,
    acepta_bolsa_profesores: boolean,
    acepta_bolsa_banda_insular: boolean,
    acepta_comunicaciones_email: boolean,
    numero_federado?: number, // Opcional, hay que colocarlos al final
    fecha_registro?: Date, // Opcional, hay que colocarlos al final
  ) {
    try {
      const passHash = await argon2.hash(password);
      // console.log(passHash);

      const user = new User(
        0,
        nombre,
        apellidos,
        dni,
        fecha_nacimiento,
        direccion,
        telefono,
        foto,
        numero_federado,
        email,
        passHash,
        fecha_registro,
        es_admin,
        activo_musico,
        activo_directivo,
        acepta_bolsa_refuerzos,
        acepta_bolsa_profesores,
        acepta_bolsa_banda_insular,
        acepta_comunicaciones_email,
      );

      const userDB: Partial<UserDB> = {
        usuario_id: user.getUsuarioId(),
        nombre: user.getNombre(),
        apellidos: user.getApellidos(),
        dni: user.getDni().toUpperCase(),
        fecha_nacimiento: user.getFechaNacimiento(),
        direccion: user.getDireccion(),
        telefono: user.getTelefono(),
        foto: user.getFoto(),
        numero_federado: user.getNumeroFederado(),
        email: user.getEmail(),
        password: user.getPassword(),
        fecha_registro: user.getFechaRegistro(),
        es_admin: user.getIsAdmin(),
        activo_musico: user.getIsActivoMusico(),
        activo_directivo: user.getIsActivoDirectivo(),
        acepta_bolsa_refuerzos: user.getAceptaBolsaRefuerzos(),
        acepta_bolsa_profesores: user.getAceptaBolsaProfesores(),
        acepta_bolsa_banda_insular: user.getAceptaBolsaBandaInsular(),
        acepta_comunicaciones_email: user.getAceptaComunicacionesEmail(),
      };

      await this.userRepository.insert(userDB);

      console.log(userDB);
      return userDB;
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw new Error('No se pudo crear el usuario');
    }
  }
}
