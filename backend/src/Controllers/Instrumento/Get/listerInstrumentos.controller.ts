import { Controller, Get } from '@nestjs/common';
import { ListerInstrumentosService } from './listerInstrumentos.service';

@Controller('instrumentos')
export class ListerInstrumentosController {
  constructor(
    private readonly listerInstrumentosService: ListerInstrumentosService,
  ) {}

  @Get()
  async listerInstrumentos() {
    try {
      return this.listerInstrumentosService.listerInstrumentos();
    } catch (error) {
      console.error('Error al listar los instrumentos:', error);
      throw new Error('No se pudo listar los instrumentos');
    }
  }
}
