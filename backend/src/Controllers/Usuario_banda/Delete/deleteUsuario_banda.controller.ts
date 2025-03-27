import { Controller, Delete, NotFoundException, Param } from '@nestjs/common';
import { DeleteUsuario_bandaService } from './deleteUsuario_banda.service';

@Controller('usuario_banda')
export class DeleteUsuario_BandaController {
  constructor(
    private readonly deleteUsuario_BandaService: DeleteUsuario_bandaService,
  ) {}

  @Delete(':id')
  async deleteUsuario_banda(@Param('id') id: number) {
    try {
      const usuario_banda =
        await this.deleteUsuario_BandaService.deleteUsuario_banda(id);
      if (!usuario_banda) {
        throw new NotFoundException('Usuario_banda no encontrado');
      }
      return { message: 'Usuario_banda eliminado con éxito', usuario_banda };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(error);
      throw new Error('No se pudo eliminar el Usuario_banda');
    }
  }
}
