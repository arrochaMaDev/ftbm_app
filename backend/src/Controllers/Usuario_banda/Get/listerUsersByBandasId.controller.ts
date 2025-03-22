import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ListerUsersByBandasIdService } from './listerUsersByBandasId.service';
import { GetBandaService } from 'src/Controllers/Banda/Get/getBanda.service';

@Controller('usuarios_bandas')
export class ListerUsersByBandasIdController {
  constructor(
    private readonly listerUsersByBandasIdService: ListerUsersByBandasIdService,
    private readonly getBandaService: GetBandaService,
  ) {}

  @Get('banda/:id')
  async listerUsersByBandaId(@Param('id') id: number) {
    try {
      const banda = await this.getBandaService.getBanda(Number(id));
      if (!banda) {
        throw new NotFoundException('No existe la banda');
      }

      const users =
        await this.listerUsersByBandasIdService.listerUsersByBandasId(
          Number(id),
        );
      if (users.length == 0) {
        throw new NotFoundException('No existen usuarios para esta banda');
      }
      // return users;

      // CONTROLAR LOS DATOS MEDIANTE UN DTO
      const usersByBandaIdDTO = {
        banda: banda,
        usuarios: users.map(({ id, usuario }) => ({
          id,
          usuario: {
            id: usuario.usuario_id,
            nombre: usuario.nombre,
            apellido: usuario.apellidos,
            dni: usuario.dni,
            fecha_nacimiento: usuario.fecha_nacimiento,
            direccion: usuario.direccion,
            telefono: usuario.telefono,
            foto: usuario.foto,
            email: usuario.email,
            activo_musico: usuario.activo_musico,
            activo_directivo: usuario.activo_directivo,
            numero_federado: usuario.numero_federado,
          },
        })),
      };
      return usersByBandaIdDTO;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(error);
      throw new Error('No se pudo listar los usuarios para la banda');
    }
  }
}
