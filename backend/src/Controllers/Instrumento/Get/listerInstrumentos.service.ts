import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstrumentoDB } from 'src/Modelos/Instrumento/instrumentoDB';
import { Repository } from 'typeorm';

@Injectable()
export class ListerInstrumentosService {
  @InjectRepository(InstrumentoDB)
  private readonly instrumentoRepository: Repository<InstrumentoDB>;

  async listerInstrumentos(): Promise<InstrumentoDB[]> {
    try {
      const listado = await this.instrumentoRepository.find();
      console.log(listado);
      return listado;
    } catch (error) {
      console.error('Error al listar los instrumentos:', error);
      throw new Error('No se pudo listar los instrumentos');
    }
  }
}
