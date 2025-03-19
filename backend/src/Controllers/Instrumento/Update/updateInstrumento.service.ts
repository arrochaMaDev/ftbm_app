import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstrumentoDB } from 'src/Modelos/Instrumento/instrumentoDB';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateInstrumentoService {
  constructor(
    @InjectRepository(InstrumentoDB)
    private readonly instrumentoRepository: Repository<InstrumentoDB>,
  ) {}
  async updateInstrumento(
    instrumento_id: number,
    newData: Partial<InstrumentoDB>,
  ): Promise<InstrumentoDB> {
    try {
      const instrumentoToUpdate = await this.instrumentoRepository.findOne({
        where: {
          instrumento_id,
        },
      });

      if (!instrumentoToUpdate) {
        throw new Error('Instrumento no encontrado');
      }

      const updatedInstrumento = this.instrumentoRepository.merge(
        instrumentoToUpdate,
        newData,
      );
      console.log(instrumentoToUpdate);

      return await this.instrumentoRepository.save(updatedInstrumento);
    } catch (error) {
      console.error('Error al actualizar el instrumento:', error);
      throw new Error('No se pudo actualizar el instrumento');
    }
  }
}
