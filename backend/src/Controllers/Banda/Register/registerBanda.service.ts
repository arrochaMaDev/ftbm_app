import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Banda } from 'src/Modelos/Banda/banda';
import { BandaDB } from 'src/Modelos/Banda/bandaDB';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterBandaService {
  constructor(
    @InjectRepository(BandaDB)
    private readonly bandaRepository: Repository<BandaDB>,
  ) {}

  async createBanda(
    nombre: string,
    municipio: string,
    email: string,
    telefono: number,
    logo: string,
    director: string,
    informacion: string,
    es_activa: boolean,
  ) {
    try {
      const banda = new Banda(
        0,
        nombre,
        municipio,
        email,
        telefono,
        logo,
        director,
        informacion,
        es_activa,
      );

      const bandaDB: Partial<BandaDB> = {
        banda_id: banda.getBanda_id(),
        nombre: banda.getNombre(),
        municipio: banda.getMunicipio(),
        email: banda.getEmail(),
        telefono: banda.getTelefono(),
        logo: banda.getLogo(),
        director: banda.getDirector(),
        informacion: banda.getInformacion(),
        es_activa: banda.getEsActiva(),
      };

      console.log(bandaDB);
      await this.bandaRepository.insert(bandaDB);
      return bandaDB;
    } catch (error) {
      console.error('Error al crear la banda:', error);
      throw new Error('No se pudo crear la banda');
    }
  }
}
