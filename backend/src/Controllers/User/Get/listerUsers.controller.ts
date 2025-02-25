import { Controller, Get } from '@nestjs/common';
import { ListerUsersService } from './listerUsers.service';

@Controller('usuarios')
export class ListerUsersController {
  constructor(private readonly listerUsersService: ListerUsersService) {}

  @Get()
  async listerUsers() {
    try {
      return this.listerUsersService.listerUsers();
    } catch (error) {
      console.error('Error al listar los usuarios:', error);
      throw new Error('No se pudo listar los usuarios');
    }
  }
}
