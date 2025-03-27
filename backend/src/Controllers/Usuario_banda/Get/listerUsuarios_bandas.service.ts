import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario_bandaDB } from 'src/Modelos/Usuario_banda/usuario_bandaDB';
import { Repository } from 'typeorm';

@Injectable()
export class ListerUsuariosBandasService {
  constructor(
    @InjectRepository(Usuario_bandaDB)
    private readonly usuarioBandaRepository: Repository<Usuario_bandaDB>,
  ) {}
  async listerUsuariosBandas(): Promise<Usuario_bandaDB[]> {
    const listado = await this.usuarioBandaRepository.find({
      relations: ['usuario', 'banda'],
    });
    console.table(listado);
    return listado;
  }
}
