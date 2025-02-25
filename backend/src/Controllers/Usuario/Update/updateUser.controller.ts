import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateUserService } from './updateUser.service';
import { UserDB } from 'src/Modelos/Usuario/userDB';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('usuario')
@ApiTags('User')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @Put(':id')
  @ApiOperation({
    summary: 'Este endpoint permite actualizar a un usuario',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuario actualizado correctamente',
  })
  @ApiResponse({ status: 404, description: 'No se encontró al usuario' })
  @ApiResponse({
    status: 500,
    description: 'Ha ocurrido un error en el servidor',
  })
  async updateUser(
    @Param('id') usuario_id: number,
    @Body() newData: Partial<UserDB>,
  ) {
    try {
      const updatedUser = await this.updateUserService.updateUser(
        Number(usuario_id),
        newData,
      );
      return updatedUser;
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      throw new Error('No se pudo actualizar el usuario');
    }
  }
}
