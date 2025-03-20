import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUsuarioBandaService } from './registerUsuario_banda.service';
import { RegisterUsuario_bandaDto } from './registerUsuario_banda.dto';

@Controller('usuario_banda')
export class RegisterUsuario_bandaController {
  constructor(
    private readonly registerUsuarioBandaService: RegisterUsuarioBandaService,
  ) {}

  @Post()
  async registerUsuarioBanda(@Body() data: RegisterUsuario_bandaDto) {
    try {
      const usuarioBandaData =
        await this.registerUsuarioBandaService.createUsuarioBanda(data);

      return usuarioBandaData;
    } catch (error) {
      console.error('Error al crear el usuario en la banda:', error);
      throw new Error('No se pudo crear el usuario en la banda');
    }
  }
}
