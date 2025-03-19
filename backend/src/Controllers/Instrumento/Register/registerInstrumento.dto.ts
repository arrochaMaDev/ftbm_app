import { IsNotEmpty, IsString } from 'class-validator';

export class registerInstrumentoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
