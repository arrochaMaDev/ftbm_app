export class Instrumento {
  constructor(
    private readonly instrumento_id: number,
    private readonly nombre: string,
  ) {}

  getInstrumento_id(): number {
    return this.instrumento_id;
  }

  getNombre(): string {
    return this.nombre;
  }
}
