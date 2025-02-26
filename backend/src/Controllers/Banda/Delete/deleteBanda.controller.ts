import { Controller, Delete, NotFoundException, Param } from '@nestjs/common';
import { DeleteBandaService } from './deleteBanda.service';

@Controller('banda')
export class DeleteBandaController {
  constructor(private readonly deleteBandaService: DeleteBandaService) {}

  @Delete(':banda_id')
  async deleteBanda(@Param('banda_id') banda_id: number) {
    try {
      const banda = await this.deleteBandaService.deleteBanda(Number(banda_id));

      if (!banda) {
        throw new NotFoundException('Banda no encontrada');
      }
      // console.log(banda);
      return { message: 'banda eliminada con éxito', banda };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al obtener la banda:', error);
      throw new Error('No se pudo obtener la banda');
    }
  }
}
