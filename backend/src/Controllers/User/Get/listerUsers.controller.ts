import { Controller, Get } from '@nestjs/common';
import { ListerUsersService } from './listerUsers.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('usuarios')
@ApiTags('User')
export class ListerUsersController {
  constructor(private readonly listerUsersService: ListerUsersService) {}

  @Get()
  @ApiOperation({
    summary: 'Este endpoint permite listar a todos los usuarios',
  })
  @ApiResponse({ status: 200, description: 'Usuarios listados correctamente' })
  @ApiResponse({ status: 404, description: 'No se encontraron usuarios' })
  @ApiResponse({
    status: 500,
    description: 'Ha ocurrido un error en el servidor',
  })
  async listerUsers() {
    try {
      return this.listerUsersService.listerUsers();
    } catch (error) {
      console.error('Error al listar los usuarios:', error);
      throw new Error('No se pudo listar los usuarios');
    }
  }
}
