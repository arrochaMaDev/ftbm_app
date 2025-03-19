import { Controller, Put, Param, Body } from '@nestjs/common';
import { InstrumentoDB } from 'src/Modelos/Instrumento/instrumentoDB';
import { UpdateInstrumentoService } from './updateInstrumento.service';

@Controller('instrumento')
export class UpdateInstrumentoController {
  constructor(
    private readonly updateInstrumentoService: UpdateInstrumentoService,
  ) {}

  @Put(':instrumento_id')
  async updateInstrumento(
    @Param('instrumento_id') instrumento_id: number,
    @Body() newData: Partial<InstrumentoDB>,
  ) {
    try {
      const updatedInstrumento =
        await this.updateInstrumentoService.updateInstrumento(
          Number(instrumento_id),
          newData,
        );
      return updatedInstrumento;
    } catch (error) {
      console.error('Error al actualizar el instrumento:', error);
      throw new Error('No se pudo actualizar el instrumento');
    }
  }
}
