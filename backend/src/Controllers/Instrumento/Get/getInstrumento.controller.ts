import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GetInstrumentoService } from './getInstrumento.service';

@Controller('instrumento')
export class GetInstrumentoController {
  constructor(private readonly getInstrumentoService: GetInstrumentoService) {}

  @Get(':instrumento_id')
  async getInstrumento(@Param('instrumento_id') instrumento_id: number) {
    try {
      const instrumento = await this.getInstrumentoService.getInstrumento(
        Number(instrumento_id),
      );

      if (!instrumento) {
        throw new NotFoundException('Instrumento no encontrado');
      }
      // console.log(instrumento);
      return instrumento;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al obtener el instrumento:', error);
      throw new Error('No se pudo obtener el instrumento');
    }
  }
}
