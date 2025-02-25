import { Controller, Get } from '@nestjs/common';
import { ListerUsersService } from './listerUsers.service';

@Controller('usuarios')
export class ListerUsersController {
  constructor(private readonly listerUsersService: ListerUsersService) {}

  @Get()
  async listerUsers() {
    return this.listerUsersService.listerUsers();
  }
}
