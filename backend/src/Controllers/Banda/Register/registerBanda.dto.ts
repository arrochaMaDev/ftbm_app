import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class RegisterBandaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-HJNP-SUVW]{1}\d{7}$/, {
    message:
      'El CIF debe tener el formato G38300802 (una letra seguida de 7 dígitos)',
  })
  cif: string;
  // [A-HJNP-SUVW]{1} → La primera letra debe estar entre A-H, J, N-P, S-U, V, W (las letras permitidas en un CIF).
  // \d{7} → Debe contener exactamente 7 dígitos numéricos después de la letra.
  // ^ y $ → Se aseguran de que no haya caracteres adicionales antes o después del CIF.

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
