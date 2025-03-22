import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario_bandaDB } from 'src/Modelos/Usuario_banda/usuario_bandaDB';
import { Repository } from 'typeorm';

@Injectable()
export class ListerUsersByBandasIdService {
  constructor(
    @InjectRepository(Usuario_bandaDB)
    private readonly usuario_bandaRepository: Repository<Usuario_bandaDB>,
  ) {}
  async listerUsersByBandasId(id: number): Promise<Usuario_bandaDB[]> {
    const listado = await this.usuario_bandaRepository.find({
      where: {
        banda: { banda_id: id },
      },
      relations: ['usuario', 'banda'],
    });

    return listado;
  }
}
