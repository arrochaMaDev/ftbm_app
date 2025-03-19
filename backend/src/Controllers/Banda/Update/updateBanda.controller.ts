import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateBandaService } from './updateBanda.service';
import { BandaDB } from 'src/Modelos/Banda/bandaDB';

@Controller('banda')
export class UpdateBandaController {
  constructor(private readonly updatebandaService: UpdateBandaService) {}
  @Put(':id')
  async updateBanda(
    @Param('id') id: number,
    @Body() newData: Partial<BandaDB>,
  ) {
    try {
      const updatedBanda = await this.updatebandaService.updateBanda(
        Number(id),
        newData,
      );
      return updatedBanda;
    } catch (error) {
      console.error('Error al actualizar la banda:', error);
      throw new Error('No se pudo actualizar la banda');
    }
  }
}
