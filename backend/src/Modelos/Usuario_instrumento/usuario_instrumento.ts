export class Usuario_instrumento {
  constructor(
    private readonly id: number,
    private readonly usuario_id: number,
    private readonly instrumento_id: number,
    private readonly descripcion: string,
    private readonly nivel_musical: string,
    private readonly acepta_bolsa_refuerzo: boolean,
    private readonly experiencia_refuerzo: string,
    private readonly acepta_bolsa_profesor: boolean,
    private readonly experiencia_profesor: string,
    private readonly acepta_bolsa_banda_insular: boolean,
    private readonly experiencia_banda_insular: string,
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
  getNivel_musical(): string {
    return this.nivel_musical;
  }
  getAcepta_bolsa_refuerzo(): boolean {
    return this.acepta_bolsa_refuerzo;
  }
  getExperiencia_refuerzo(): string {
    return this.experiencia_refuerzo;
  }
  getAcepta_bolsa_profesor(): boolean {
    return this.acepta_bolsa_profesor;
  }
  getExperiencia_profesor(): string {
    return this.experiencia_profesor;
  }
  getAcepta_bolsa_banda_insular(): boolean {
    return this.acepta_bolsa_banda_insular;
  }
  getExperiencia_banda_insular(): string {
    return this.experiencia_banda_insular;
  }
}
