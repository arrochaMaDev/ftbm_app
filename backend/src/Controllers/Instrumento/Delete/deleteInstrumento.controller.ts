import { Controller, Delete, Param, NotFoundException } from '@nestjs/common';
import { DeleteInstrumentoService } from './deleteInstrumento.service';

@Controller('instrumento')
export class DeleteInstrumentoController {
  constructor(
    private readonly deleteInstrumentoService: DeleteInstrumentoService,
  ) {}
  @Delete(':instrumento_id')
  async deleteInstrumento(@Param('instrumento_id') instrumento_id: number) {
    try {
      const instrumento = await this.deleteInstrumentoService.deleteInstrumento(
        Number(instrumento_id),
      );
      if (!instrumento) {
        throw new NotFoundException('Instrumento no encontrado');
      }
      // console.log(instrumento);
      return { message: 'Instrumento eliminado con éxito', instrumento };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al eliminar el instrumento:', error);
      throw new Error('No se pudo eliminar el instrumento');
    }
  }
}
