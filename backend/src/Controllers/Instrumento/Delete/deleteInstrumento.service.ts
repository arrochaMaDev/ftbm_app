import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstrumentoDB } from 'src/Modelos/Instrumento/instrumentoDB';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteInstrumentoService {
  constructor(
    @InjectRepository(InstrumentoDB)
    private readonly instrumentoRepository: Repository<InstrumentoDB>,
  ) {}

  async deleteInstrumento(instrumento_id: number): Promise<InstrumentoDB> {
    try {
      const instrumento = await this.instrumentoRepository.findOne({
        where: {
          instrumento_id,
        },
      });

      if (!instrumento) {
        throw new Error('Instrumento no encontrado');
      }

      return await this.instrumentoRepository.remove(instrumento);
    } catch (error) {
      console.error('Error al eliminar el instrumento:', error);
      throw new Error('No se pudo eliminar el instrumento');
    }
  }
}
