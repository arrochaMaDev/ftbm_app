export class User {
  constructor(
    private readonly usuario_id: number,
    private readonly nombre: string,
    private readonly apellidos: string,
    private readonly dni: string,
    private readonly direccion: string,
    private readonly telefono: number,
    private readonly foto: string,
    private readonly numero_federado: number,
    private readonly email: string,
    private readonly password: string, //argon2
    private readonly fecha_registro: Date,
    private readonly es_admin: boolean,
    // private readonly tipo_usuario: number,
    private readonly activo_musico: boolean,
    private readonly activo_directivo: boolean,
    private readonly acepta_bolsa_refuerzos: boolean,
    private readonly acepta_bolsa_profesores: boolean,
    private readonly acepta_bolsa_banda_insular: boolean,
    private readonly acepta_comunicaciones_email: boolean,
  ) {}

  getUsuarioId(): number {
    return this.usuario_id;
  }

  getNombre(): string {
    return this.nombre;
  }

  getApellidos(): string {
    return this.apellidos;
  }

  getDni(): string {
    return this.dni;
  }

  getDireccion(): string {
    return this.direccion;
  }

  getTelefono(): number {
    return this.telefono;
  }

  getFoto(): string {
    return this.foto;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getFechaRegistro(): Date {
    return this.fecha_registro;
  }

  getIsAdmin(): boolean {
    return this.es_admin;
  }

  // getTipoUsuario(): number {
  //   return this.tipo_usuario;
  // }

  getNumeroFederado(): number {
    return this.numero_federado;
  }

  getIsActivoMusico(): boolean {
    return this.activo_musico;
  }

  getIsActivoDirectivo(): boolean {
    return this.activo_directivo;
  }

  getAceptaBolsaRefuerzos(): boolean {
    return this.acepta_bolsa_refuerzos;
  }

  getAceptaBolsaProfesores(): boolean {
    return this.acepta_bolsa_profesores;
  }

  getAceptaBolsaBandaInsular(): boolean {
    return this.acepta_bolsa_banda_insular;
  }

  getAceptaComunicacionesEmail(): boolean {
    return this.acepta_comunicaciones_email;
  }
}
