import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ type: 'string', description: 'Nombre del usuario' })
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'Apellidos del usuario' })
  apellidos: string;

  @IsString()
  @IsIdentityCard('ES', {
    message: 'El DNI no tiene el formato correcto (12345678X)',
  }) // validar para que sea en formato 12345678X de españa
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'DNI del usuario' })
  dni: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'Dirección del usuario' })
  direccion: string;

  @Type(() => Number) // decorador de class-transformer
  @IsNumber()
  @IsNotEmpty() // validado para que sea un número de 9 dígitos (entre 100000000 y 999999999) y en formato 123456789
  @Min(100000000)
  @Max(999999999)
  @ApiProperty({ type: 'number', description: 'Número de usuario en la FTBM' })
  telefono: number;

  @IsOptional()
  @ApiProperty({ type: 'string', description: 'Foto del usuario' })
  foto: any;

  @IsNumber()
  @ApiProperty({
    type: 'number',
    description: 'Número de federado en la FTBM autogenerado',
  })
  numero_federado: number;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    type: 'string',
    description: 'Correo electrónico del usuario',
  })
  email: string;

  @IsString()
  @ApiProperty({
    type: 'string',
    description: 'Contraseña del usuario hasheada',
  })
  password: string;

  @IsOptional()
  @Type(() => Date)
  @ApiProperty({
    type: 'date',
    description: 'Fecha de registro del usuario autogenerado',
  })
  fecha_registro?: Date;

  @IsBoolean()
  @ApiProperty({
    type: 'boolean',
    description: 'Si es administrador del sistema',
  })
  es_admin: boolean;

  @IsBoolean()
  @ApiProperty({
    type: 'boolean',
    description: 'Si es un usuario activo en la FTBM',
  })
  activo_musico: boolean;

  @IsBoolean()
  @ApiProperty({
    type: 'boolean',
    description: 'Si es un directivo activo en la FTBM',
  })
  activo_directivo: boolean;

  @IsBoolean()
  @ApiProperty({
    type: 'boolean',
    description: 'Si acepta pertenecer a la bolsa de refuerzos',
  })
  acepta_bolsa_refuerzos: boolean;

  @IsBoolean()
  @ApiProperty({
    type: 'boolean',
    description: 'Si acepta pertenecer a la bolsa de profesores',
  })
  acepta_bolsa_profesores: boolean;

  @IsBoolean()
  @ApiProperty({
    type: 'boolean',
    description: 'Si acepta pertenecer a la bolsa de banda insular',
  })
  acepta_bolsa_banda_insular: boolean;

  @IsBoolean()
  @ApiProperty({
    type: 'boolean',
    description: 'Si acepta recibir comunicaciones por email',
  })
  acepta_comunicaciones_email: boolean;
}
