import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Instrumento } from 'src/Modelos/Instrumento/instrumento';
import { InstrumentoDB } from 'src/Modelos/Instrumento/instrumentoDB';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterInstrumentoService {
  constructor(
    @InjectRepository(InstrumentoDB)
    private readonly instrumentoRepository: Repository<InstrumentoDB>,
  ) {}

  async createInstrumento(nombre: string) {
    try {
      const instrumento = new Instrumento(0, nombre);
      const instrumentoDB: Partial<InstrumentoDB> = {
        instrumento_id: instrumento.getInstrumento_id(),
        nombre: instrumento.getNombre(),
      };

      console.log(instrumentoDB);
      await this.instrumentoRepository.insert(instrumentoDB);
      return instrumentoDB;
    } catch (error) {
      console.error('Error al crear el instrumento:', error);
      throw new Error('No se pudo crear el instrumento');
    }
  }
}
