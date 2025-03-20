import { BandaDB } from '../Banda/bandaDB';
import { UserDB } from '../Usuario/userDB';

export class Usuario_banda {
  constructor(
    private readonly id: number,
    private readonly usuario_id: UserDB,
    private readonly banda_id: BandaDB,
    private readonly fecha_alta: Date,
    private readonly es_musico: boolean,
    private readonly es_directivo: boolean,
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

  getEs_musico(): boolean {
    return this.es_musico;
  }

  getEs_directivo(): boolean {
    return this.es_directivo;
  }
}
