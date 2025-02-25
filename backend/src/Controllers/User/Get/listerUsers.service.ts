import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDB } from 'src/Modelos/User/userDB';
import { Repository } from 'typeorm';

@Injectable()
export class ListerUsersService {
  constructor(
    @InjectRepository(UserDB)
    private readonly userRepository: Repository<UserDB>,
  ) {}

  async listerUsers(): Promise<UserDB[]> {
    try {
      const listado = await this.userRepository.find();
      console.log(listado);
      return listado;
    } catch (error) {}
  }
}
