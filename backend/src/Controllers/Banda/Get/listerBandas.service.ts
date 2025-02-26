import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BandaDB } from 'src/Modelos/Banda/bandaDB';
import { Repository } from 'typeorm';

@Injectable()
export class ListerBandasService {
  constructor(
    @InjectRepository(BandaDB)
    private readonly bandaRepository: Repository<BandaDB>,
  ) {}
  async listerBandas(): Promise<BandaDB[]> {
    try {
      const listado = await this.bandaRepository.find();
      console.log(listado);
      return listado;
    } catch (error) {
      console.error('Error al listar las bandas:', error);
      throw new Error('No se pudo listar las bandas');
    }
  }
}
