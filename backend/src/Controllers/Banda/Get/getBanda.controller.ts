import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GetBandaService } from './getBanda.service';

@Controller('banda')
export class GetBandaController {
  constructor(private readonly getBandaService: GetBandaService) {}

  @Get(':banda_id')
  async getBanda(@Param('banda_id') banda_id: number) {
    try {
      const banda = await this.getBandaService.getBanda(Number(banda_id));

      if (!banda) {
        throw new NotFoundException('Banda no encontrada');
      }
      // console.log(banda);
      return banda;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al obtener la banda:', error);
      throw new Error('No se pudo obtener la banda');
    }
  }
}
