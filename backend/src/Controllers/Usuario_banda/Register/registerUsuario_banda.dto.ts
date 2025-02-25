import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RegisterUserDto {
  @IsNumber()
  @IsNotEmpty()
  usuario_id: number;

  @IsNumber()
  @IsNotEmpty()
  instrumento_id: number;

  @IsString()
  descripcion: string;
}
