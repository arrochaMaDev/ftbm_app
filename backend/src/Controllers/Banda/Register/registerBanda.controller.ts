import { Body, Controller, Post } from '@nestjs/common';
import { RegisterBandaService } from './registerBanda.service';
import { RegisterBandaDto } from './registerBanda.dto';

@Controller('banda')
export class RegisterBandaController {
  constructor(private readonly registerBandaService: RegisterBandaService) {}

  @Post()
  async registerBanda(@Body() data: RegisterBandaDto) {
    try {
      const {
        nombre,
        municipio,
        email,
        telefono,
        logo,
        director,
        informacion,
        es_activa,
      } = data;

      const bandaData = await this.registerBandaService.createBanda(
        nombre,
        municipio,
        email,
        telefono,
        logo,
        director,
        informacion,
        es_activa,
      );

      const banda = {
        id: bandaData.banda_id,
        nombre: bandaData.nombre,
        municipio: bandaData.municipio,
        email: bandaData.email,
        telefono: bandaData.telefono,
        logo: bandaData.logo,
        director: bandaData.director,
        informacion: bandaData.informacion,
        es_activa: bandaData.es_activa,
      };
      return banda;
    } catch (error) {
      console.error('Error al crear la banda', error);
      throw new Error('No se pudo crear la banda');
    }
  }
}
