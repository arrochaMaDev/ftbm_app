import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteUserService } from './deleteUser.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('usuario')
@ApiTags('User')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Delete(':id')
  @ApiOperation({
    summary: 'Este endpoint permite borrar a un usuario',
  })
  @ApiResponse({ status: 200, description: 'Usuario borrado correctamente' })
  @ApiResponse({ status: 404, description: 'No se encontró al usuario' })
  @ApiResponse({
    status: 500,
    description: 'Ha ocurrido un error en el servidor',
  })
  async getUser(@Param('id') usuario_id: number) {
    try {
      const user = await this.deleteUserService.deleteUser(Number(usuario_id));

      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      console.log(user);
      return { message: 'Usuario eliminado con éxito', user };
    } catch (error) {
      console.error(error);
      throw new Error('Ha habido un error al intentar eliminar el usuario');
    }
  }
}
