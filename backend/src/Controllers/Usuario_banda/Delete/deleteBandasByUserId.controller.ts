import { Controller, Delete, Param, NotFoundException } from '@nestjs/common';
import { DeleteBandasByUserIdService } from './deleteBandasByUserId.service';

@Controller('usuario_banda')
export class DeleteBandasByUserIdController {
  constructor(
    private readonly deleteBandasByUserIdService: DeleteBandasByUserIdService,
  ) {}
  @Delete('delete/:userId')
  async deleteBandasByUserId(@Param('userId') userId: number) {
    try {
      const bandas_user =
        await this.deleteBandasByUserIdService.deleteBandasByUserId(userId);
      if (!bandas_user) {
        throw new NotFoundException('No se encontraron bandas para el usuario');
      }
      console.log(bandas_user);
      return { message: 'Bandas eliminadas con éxito', bandas_user };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(error);
      throw new Error('No se pudo eliminar las bandas');
    }
  }
}
