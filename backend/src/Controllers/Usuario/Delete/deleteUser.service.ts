import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDB } from 'src/Modelos/Usuario/userDB';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteUserService {
  constructor(
    @InjectRepository(UserDB)
    private readonly userRepository: Repository<UserDB>,
  ) {}

  async deleteUser(usuario_id: number): Promise<UserDB> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          usuario_id,
        },
      });

      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      console.log(user);
      return await this.userRepository.remove(user);
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      throw new Error('No se pudo obtener el usuario');
    }
  }
}
