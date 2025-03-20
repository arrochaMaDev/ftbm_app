import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GetUsuario_bandaService } from './getUsuario_banda.service';

@Controller('usuario_banda')
export class GetUsuario_BandaController {
  constructor(
    private readonly getUsuario_BandaService: GetUsuario_bandaService,
  ) {}

  @Get(':id')
  async getUsuario_banda(@Param('id') id: number) {
    try {
      const usuario_banda =
        await this.getUsuario_BandaService.getUsuario_banda(id);

      if (!usuario_banda) {
        throw new NotFoundException('Usuario_banda no encontrado');
      }
      // OPCIÓN DE CONTROLAR LOS DATOS MEDIANTE UN DTO
      // const usuario_bandaDTO = {
      //   id: usuario_banda.id,
      //   usuario: {
      //     nombre: usuario_banda.usuario.nombre,
      //     apellidos: usuario_banda.usuario.apellidos,
      //     dni: usuario_banda.usuario.dni,
      //   },
      //   banda: {
      //     nombre: usuario_banda.banda.nombre,
      //   },
      //   fecha_alta: usuario_banda.fecha_alta,
      //   es_musico: usuario_banda.es_musico,
      //   es_directivo: usuario_banda.es_directivo,
      // };

      // return usuario_bandaDTO;
      return usuario_banda;
    } catch (error) {
      console.error(error);
      throw new Error('No se pudo obtener el Usuario_banda');
    }
  }
}
