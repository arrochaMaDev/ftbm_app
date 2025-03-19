import { Body, Controller, Post } from '@nestjs/common';
import { RegisterInstrumentoService } from './registerInstrumento.service';
import { registerInstrumentoDto } from './registerInstrumento.dto';

@Controller('instrumento')
export class RegisterInstrumentoController {
  constructor(
    private readonly registerInstrumentoService: RegisterInstrumentoService,
  ) {}

  @Post()
  async registerInstrumento(@Body() data: registerInstrumentoDto) {
    try {
      const { nombre } = data;

      const instrumentoData =
        await this.registerInstrumentoService.createInstrumento(nombre);

      const instrumento = {
        id: instrumentoData.instrumento_id,
        nombre: instrumentoData.nombre,
      };
      return instrumento;
    } catch (error) {
      console.error('Error al crear el instrumento', error);
      throw new Error('No se pudo crear el instrumento');
    }
  }
}
