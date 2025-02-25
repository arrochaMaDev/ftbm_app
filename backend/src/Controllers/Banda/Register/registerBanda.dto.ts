import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class RegisterBandaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  municipio: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Type(() => Number) // decorador de class-transformer
  @IsNumber()
  @IsNotEmpty() // validado para que sea un número de 9 dígitos (entre 100000000 y 999999999) y en formato 123456789
  @Min(100000000)
  @Max(999999999)
  telefono: number;

  @IsOptional()
  logo: any;

  @IsString()
  @IsOptional()
  director: string;

  @IsString()
  @IsOptional()
  informacion: string;

  @IsBoolean()
  @IsNotEmpty()
  es_activa: boolean;
}
