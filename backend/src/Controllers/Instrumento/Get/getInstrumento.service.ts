import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstrumentoDB } from 'src/Modelos/Instrumento/instrumentoDB';
import { Repository } from 'typeorm';

@Injectable()
export class GetInstrumentoService {
  constructor(
    @InjectRepository(InstrumentoDB)
    private readonly instrumentoRepository: Repository<InstrumentoDB>,
  ) {}

  async getInstrumento(instrumento_id: number): Promise<InstrumentoDB> {
    try {
      const instrumento = await this.instrumentoRepository.findOne({
        where: {
          instrumento_id,
        },
      });
      console.log(instrumento);
      return instrumento;
    } catch (error) {
      console.error('Error al obtener el instrumento:', error);
      throw new Error('No se pudo obtener el instrumento');
    }
  }
}
