import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario_bandaDB } from 'src/Modelos/Usuario_banda/usuario_bandaDB';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteBandasByUserIdService {
  constructor(
    @InjectRepository(Usuario_bandaDB)
    private readonly usuario_bandaRepository: Repository<Usuario_bandaDB>,
  ) {}

  async deleteBandasByUserId(userId: number): Promise<Usuario_bandaDB[]> {
    try {
      const bandas_user = await this.usuario_bandaRepository.find({
        where: {
          usuario: {
            usuario_id: userId,
          },
        },
        relations: ['usuario', 'banda'],
      });

      if (!bandas_user || bandas_user.length === 0) {
        throw new NotFoundException('No se encontraron bandas para el usuario');
      }

      return await this.usuario_bandaRepository.remove(bandas_user);
    } catch (error) {
      console.error('Error al eliminar las bandas del usuario:', error);
      throw new Error('Error al eliminar las bandas del usuario');
    }
  }
}
