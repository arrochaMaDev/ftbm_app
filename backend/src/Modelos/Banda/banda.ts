export class Banda {
  constructor(
    private readonly banda_id: number,
    private readonly nombre: string,
    private readonly cif: string,
    private readonly municipio: string,
    private readonly email: string,
    private readonly telefono: number,
    private readonly logo: string,
    private readonly director: string,
    private readonly informacion: string,
    private readonly es_activa: boolean,
  ) {}

  getBanda_id(): number {
    return this.banda_id;
  }

  getNombre(): string {
    return this.nombre;
  }

  getCif(): string {
    return this.cif;
  }

  getMunicipio(): string {
    return this.municipio;
  }

  getEmail(): string {
    return this.email;
  }

  getTelefono(): number {
    return this.telefono;
  }

  getLogo(): string {
    return this.logo;
  }

  getDirector(): string {
    return this.director;
  }

  getInformacion(): string {
    return this.informacion;
  }

  getEsActiva(): boolean {
    return this.es_activa;
  }
}
