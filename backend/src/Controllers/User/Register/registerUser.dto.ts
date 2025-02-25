import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsIdentityCard,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Max,
  Min,
  IsString,
} from 'class-validator';

export class RegisterUserDto {
  usuario_id: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsString()
  @IsIdentityCard('ES', {
    message: 'El DNI no tiene el formato correcto (12345678X)',
  }) // validar para que sea en formato 12345678X de españa
  @IsNotEmpty()
  dni: string;

  @IsString()
  @IsNotEmpty()
  direccion: string;

  @Type(() => Number) // decorador de class-transformer
  @IsNumber()
  @IsNotEmpty() // validado para que sea un número de 9 dígitos (entre 100000000 y 999999999) y en formato 123456789
  @Min(100000000)
  @Max(999999999)
  telefono: number;

  @IsOptional()
  foto: any;

  @IsNumber()
  numero_federado: number;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @Type(() => Date)
  fecha_registro?: Date;

  @IsBoolean()
  es_admin: boolean;

  @IsBoolean()
  activo_musico: boolean;

  @IsBoolean()
  activo_directivo: boolean;

  @IsBoolean()
  acepta_bolsa_refuerzos: boolean;

  @IsBoolean()
  acepta_bolsa_profesores: boolean;

  @IsBoolean()
  acepta_bolsa_banda_insular: boolean;

  @IsBoolean()
  acepta_comunicaciones_email: boolean;
}
