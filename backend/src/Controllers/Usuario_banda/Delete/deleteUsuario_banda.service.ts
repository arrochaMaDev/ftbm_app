import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario_bandaDB } from 'src/Modelos/Usuario_banda/usuario_bandaDB';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteUsuario_bandaService {
  constructor(
    @InjectRepository(Usuario_bandaDB)
    private readonly usuario_bandaRepository: Repository<Usuario_bandaDB>,
  ) {}
  async deleteUsuario_banda(id: number): Promise<Usuario_bandaDB | null> {
    const usuario_banda = await this.usuario_bandaRepository.findOne({
      where: {
        id,
      },
      relations: ['usuario', 'banda'],
    });

    if (!usuario_banda) {
      throw new Error('Usuario_banda no encontrado');
    }
    console.log(usuario_banda);

    return await this.usuario_bandaRepository.remove(usuario_banda);
  }
}
