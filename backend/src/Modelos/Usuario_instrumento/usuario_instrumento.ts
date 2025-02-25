export class Usuario_instrumento {
  constructor(
    private readonly id: number,
    private readonly usuario_id: number,
    private readonly instrumento_id: number,
    private readonly descripcion: string,
  ) {}

  getId(): number {
    return this.id;
  }

  getUsuario_id(): number {
    return this.usuario_id;
  }

  getInstrumento_id(): number {
    return this.instrumento_id;
  }

  getDescripcion(): string {
    return this.descripcion;
  }
}
