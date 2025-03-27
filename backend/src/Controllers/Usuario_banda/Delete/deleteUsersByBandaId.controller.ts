import { Controller, Delete, NotFoundException } from '@nestjs/common';
import { DeleteUsersByBandaIdService } from './deleteUsersByBandaId.service';

@Controller('usuario_banda ')
export class DeleteUsersByBandaIdController {
  constructor(
    private readonly deleteUsersByBandaIdService: DeleteUsersByBandaIdService,
  ) {}
  @Delete('delete/:bandaId')
  async deleteUsersByBandaId(bandaId: number) {
    try {
      const users_banda =
        await this.deleteUsersByBandaIdService.deleteUsersByBandaId(bandaId);
      if (!users_banda || users_banda.length === 0) {
        throw new NotFoundException('No se encontraron usuarios para la banda');
      }
      console.log(users_banda);
      return { message: 'Usuarios eliminados con éxito', users_banda };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(error);
      throw new Error('No se pudo eliminar los usuarios');
    }
  }
}
