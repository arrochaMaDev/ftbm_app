import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteUserService } from './DeleteUser.service';

@Controller('usuario')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Delete(':id')
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
