import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class RegisterUsuario_bandaDto {
  @IsNumber()
  @IsNotEmpty()
  usuario_id: number;

  @IsNumber()
  @IsNotEmpty()
  banda_id: number;

  @Type(() => Date)
  fecha_alta: Date;

  @IsBoolean()
  @IsNotEmpty()
  es_musico: boolean;

  @IsBoolean()
  @IsNotEmpty()
  es_directivo: boolean;
}
