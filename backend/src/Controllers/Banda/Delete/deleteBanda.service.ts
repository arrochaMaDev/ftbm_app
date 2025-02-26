import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BandaDB } from 'src/Modelos/Banda/bandaDB';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteBandaService {
  constructor(
    @InjectRepository(BandaDB)
    private readonly bandaRepository: Repository<BandaDB>,
  ) {}

  async deleteBanda(banda_id: number): Promise<BandaDB> {
    try {
      const banda = await this.bandaRepository.findOne({
        where: {
          banda_id,
        },
      });

      if (!banda) {
        throw new Error('Banda no encontrada');
      }

      console.log(banda);
      return await this.bandaRepository.remove(banda);
    } catch (error) {
      console.error('Error al obtener la banda:', error);
      throw new Error('No se pudo obtener la banda');
    }
  }
}
