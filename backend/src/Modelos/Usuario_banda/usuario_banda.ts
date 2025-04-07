import { BandaDB } from '../Banda/bandaDB';
import { UserDB } from '../Usuario/userDB';

export class Usuario_banda {
  constructor(
    private readonly id: number,
    private readonly usuario_id: UserDB,
    private readonly banda_id: BandaDB,
    private readonly fecha_alta: Date,
    private readonly año_federado: number, //se guarda solo el año durante los primeros años de la aplicación. Luego se omite esta columna en la actualización
    private readonly es_musico: boolean,
    private readonly es_directivo: boolean,
    private readonly es_director: boolean,
    private readonly es_profesor: boolean,
    private readonly certificado_profesor: string,
  ) {}

  getId(): number {
    return this.id;
  }

  getUsuario_id(): UserDB {
    return this.usuario_id;
  }

  getBanda_id(): BandaDB {
    return this.banda_id;
  }

  getFecha_alta(): Date {
    return this.fecha_alta;
  }
  getAño_federado(): number {
    return this.año_federado;
  }

  getEs_musico(): boolean {
    return this.es_musico;
  }

  getEs_directivo(): boolean {
    return this.es_directivo;
  }
  getEs_director(): boolean {
    return this.es_director;
  }
  getEs_profesor(): boolean {
    return this.es_profesor;
  }
  getCertificado_profesor(): string {
    return this.certificado_profesor;
  }
}
