import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BandaDB } from 'src/Modelos/Banda/bandaDB';
import { Repository } from 'typeorm';

@Injectable()
export class GetBandaService {
  constructor(
    @InjectRepository(BandaDB)
    private readonly bandaRepository: Repository<BandaDB>,
  ) {}

  async getBanda(banda_id: number): Promise<BandaDB> {
    try {
      const banda = await this.bandaRepository.findOne({
        where: {
          banda_id,
        },
      });
      console.log(banda);
      return banda;
    } catch (error) {
      console.error('Error al obtener la banda:', error);
      throw new Error('No se pudo obtener la banda');
    }
  }
}
