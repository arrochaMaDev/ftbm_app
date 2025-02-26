import { Controller, Get, Param } from '@nestjs/common';
import { GetUserService } from './getUser.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { Res } from '@nestjs/common';
// import { Response } from 'express';

@Controller('usuario')
@ApiTags('User')
export class GetUserController {
  constructor(private readonly getUserService: GetUserService) {}

  @Get(':usuario_id')
  @ApiOperation({
    summary: 'Este endpoint permite obtener a un usuario',
  })
  @ApiResponse({ status: 200, description: 'Usuario obtenido correctamente' })
  @ApiResponse({ status: 404, description: 'No se encontró al usuario' })
  @ApiResponse({
    status: 500,
    description: 'Ha ocurrido un error en el servidor',
  })
  // async getUser(@Param('id') usuario_id: number, @Res() response: Response) {
  async getUser(@Param('usuario_id') usuario_id: number) {
    // Sin @Res para que NestJS maneje la respuesta automáticamente
    try {
      const user = await this.getUserService.getUser(Number(usuario_id));

      if (!user) {
        // return response.status(404).json({ message: 'Usuario no encontrado' });
        throw new Error('Usuario no encontrado');
      }

      // return response.status(200).json(user)
      console.log(user);
      return user;
    } catch (error) {
      console.error(error);
      throw new Error('Ha habido un error al intentar obtener el usuario');

      // return response
      //   .status(500)
      //   .json({ message: 'Error interno del servidor' });
    }
  }
}
