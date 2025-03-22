import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ListerBandasByUserIdService } from './listerBandasByUserId.service';
import { GetUserService } from 'src/Controllers/Usuario/Get/getUser.service';

@Controller('usuarios_bandas')
export class ListerBandasByUserIdController {
  constructor(
    private readonly listerBandasByUserIdUserIdService: ListerBandasByUserIdService,
    private readonly getUserService: GetUserService,
  ) {}

  @Get('usuario/:id')
  async listerBandasByUserId(@Param('id') id: number) {
    try {
      const user = await this.getUserService.getUser(Number(id));
      if (!user) {
        throw new NotFoundException('No existe el usuario');
      }

      const bandas =
        await this.listerBandasByUserIdUserIdService.listerBandasByUserId(
          Number(id),
        );
      if (bandas.length == 0) {
        throw new NotFoundException('No existen bandas para este usuario');
      }
      // return bandas;

      // CONTROLAR LOS DATOS MEDIANTE UN DTO
      const bandasByUserIdDTO = {
        usuario: user,
        bandas: bandas.map(({ id, banda }) => ({
          id,
          nombre: banda.nombre,
          cif: banda.cif,
          municipio: banda.municipio,
          email: banda.email,
          telefono: banda.telefono,
          logo: banda.logo,
          director: banda.director,
          informacion: banda.informacion,
          es_activa: banda.es_activa,
        })),
      };
      return bandasByUserIdDTO;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(error);
      throw new Error('No se pudo listar las bandas para el usuario');
    }
  }
}
