import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario_bandaDB } from 'src/Modelos/Usuario_banda/usuario_bandaDB';
import { Repository } from 'typeorm';

@Injectable()
export class GetUsuario_bandaService {
  constructor(
    @InjectRepository(Usuario_bandaDB)
    private readonly usuario_bandaRepository: Repository<Usuario_bandaDB>,
  ) {}
  async getUsuario_banda(id: number): Promise<Usuario_bandaDB | null> {
    const usuario_banda = await this.usuario_bandaRepository.findOne({
      where: {
        id,
      },
      relations: ['usuario', 'banda'],
    });

    return usuario_banda || null;
  }
}
