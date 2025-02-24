export class Banda {
  constructor(
    private readonly banda_id: number,
    private readonly nombre: string,
  ) {}

  getBanda_id(): number {
    return this.banda_id;
  }

  getNombre(): string {
    return this.nombre;
  }
}
