import { Controller, Get } from '@nestjs/common';
import { ListerBandasService } from './listerBandas.service';

@Controller('bandas')
export class ListerBandasController {
  constructor(private readonly listerBandasService: ListerBandasService) {}

  @Get()
  async listerBandas() {
    try {
      return this.listerBandasService.listerBandas();
    } catch (error) {
      console.error('Error al listar las bandas:', error);
      throw new Error('No se pudo listar las bandas');
    }
  }
}
