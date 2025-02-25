import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDB } from 'src/Modelos/Usuario/userDB';
import { Repository } from 'typeorm';

@Injectable()
export class GetUserService {
  constructor(
    @InjectRepository(UserDB)
    private readonly userRepository: Repository<UserDB>,
  ) {}

  async getUser(usuario_id: number): Promise<UserDB> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          usuario_id,
        },
      });
      console.log(user);
      return user;
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      throw new Error('No se pudo obtener el usuario');
    }
  }
}
