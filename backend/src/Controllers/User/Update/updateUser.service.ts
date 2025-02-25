import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDB } from 'src/Modelos/User/userDB';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';

@Injectable()
export class UpdateUserService {
  constructor(
    @InjectRepository(UserDB)
    private readonly userRepository: Repository<UserDB>,
  ) {}

  async updateUser(
    usuario_id: number,
    newData: Partial<UserDB>,
  ): Promise<UserDB> {
    try {
      const userToUpdate = await this.userRepository.findOne({
        where: {
          usuario_id,
        },
      });

      if (!userToUpdate) {
        throw new Error('Usuario no encontrado');
      }

      if (newData.password) {
        const passHasheada = await argon2.hash(newData.password);
        newData.password = passHasheada;
      }
      const updatedUser = this.userRepository.merge(userToUpdate, newData);
      console.log(userToUpdate);

      return await this.userRepository.save(updatedUser);
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      throw new Error('No se pudo actualizar el usuario');
    }
  }
}
