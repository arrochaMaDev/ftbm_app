import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BandaDB } from 'src/Modelos/Banda/bandaDB';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateBandaService {
  constructor(
    @InjectRepository(BandaDB)
    private readonly bandaRepository: Repository<BandaDB>,
  ) {}

  async updateBanda(
    banda_id: number,
    newData: Partial<BandaDB>,
  ): Promise<BandaDB> {
    try {
      const bandaToUpdate = await this.bandaRepository.findOne({
        where: {
          banda_id,
        },
      });

      if (!bandaToUpdate) {
        throw new Error('Banda no encontrada');
      }

      const updatedBanda = this.bandaRepository.merge(bandaToUpdate, newData);
      console.log(bandaToUpdate);

      return await this.bandaRepository.save(updatedBanda);
    } catch (error) {
      console.error('Error al actualizar la banda:', error);
      throw new Error('No se pudo actualizar la banda');
    }
  }
}
