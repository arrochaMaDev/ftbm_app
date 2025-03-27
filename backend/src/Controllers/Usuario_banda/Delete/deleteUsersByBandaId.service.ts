import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario_bandaDB } from 'src/Modelos/Usuario_banda/usuario_bandaDB';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteUsersByBandaIdService {
  constructor(
    @InjectRepository(Usuario_bandaDB)
    private readonly usuario_bandaRepository: Repository<Usuario_bandaDB>,
  ) {}

  async deleteUsersByBandaId(bandaId: number): Promise<Usuario_bandaDB[]> {
    try {
      const users_banda = await this.usuario_bandaRepository.find({
        where: {
          banda: {
            banda_id: bandaId,
          },
        },
        relations: ['usuario', 'banda'],
      });

      if (!users_banda || users_banda.length === 0) {
        throw new NotFoundException('No se encontraron usuarios para la banda');
      }
      console.log(users_banda);

      return await this.usuario_bandaRepository.remove(users_banda);
    } catch (error) {
      console.error('Error al eliminar los usuarios de la banda:', error);
      throw new Error('Error al eliminar los usuarios de la banda');
    }
  }
}
