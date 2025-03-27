import { Controller, Get } from '@nestjs/common';
import { ListerUsuariosBandasService } from './listerUsuarios_bandas.service';

@Controller('usuarios_bandas')
export class ListerUsuariosBandasController {
  constructor(
    private readonly listerUsuarioBandaService: ListerUsuariosBandasService,
  ) {}

  @Get()
  async listerUsuariosBandas() {
    try {
      const usuarios_bandas =
        await this.listerUsuarioBandaService.listerUsuariosBandas();

      // Filtrar los datos antes de devolverlos
      // const usuarios_bandasDTO = usuarios_bandas.map((usuarioBanda) => ({
      //   usuario_nombre: usuarioBanda.usuario.nombre,
      //   usuario_apellidos: usuarioBanda.usuario.apellidos,
      //   usuario_DNI: usuarioBanda.usuario.dni,
      //   nombre_banda: usuarioBanda.banda.nombre,
      // }));

      // return usuarios_bandasDTO;
      return usuarios_bandas;
    } catch (error) {
      console.error(error);
      throw new Error('No se pudo listar los usuarios en las bandas');
    }
  }
}
