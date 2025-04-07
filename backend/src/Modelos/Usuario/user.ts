export class User {
  constructor(
    private readonly usuario_id: number,
    private readonly nombre: string,
    private readonly apellidos: string,
    private readonly dni: string,
    private readonly foto_dni: string,
    private readonly fecha_nacimiento: Date,
    private readonly nombre_tutor: string,
    private readonly apellidos_tutor: string,
    private readonly parentesco: string,
    private readonly dni_tutor: string,
    private readonly foto_dni_tutor: string,
    private readonly direccion: string,
    private readonly telefono: number,
    private readonly foto: string,
    private readonly numero_federado: number, //se inicia desde el 101 (1-100 para socios honoríficos)
    private readonly email: string,
    private readonly password: string, //argon2
    private readonly fecha_registro: Date,
    private readonly es_admin: boolean,
    private readonly es_activo: boolean,

    // private readonly activo_musico: boolean,
    // private readonly activo_directivo: boolean,
    // private readonly acepta_bolsa_refuerzos: boolean,
    // private readonly acepta_bolsa_profesores: boolean,
    // private readonly acepta_bolsa_banda_insular: boolean,
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
  getFotoDni(): string {
    return this.foto_dni;
  }

  getFechaNacimiento(): Date {
    return this.fecha_nacimiento;
  }
  getNombreTutor(): string {
    return this.nombre_tutor;
  }
  getApellidosTutor(): string {
    return this.apellidos_tutor;
  }
  getParentesco(): string {
    return this.parentesco;
  }
  getDniTutor(): string {
    return this.dni_tutor;
  }
  getFotoDniTutor(): string {
    return this.foto_dni_tutor;
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
  getIsActivo(): boolean {
    return this.es_activo;
  }

  // getTipoUsuario(): number {
  //   return this.tipo_usuario;
  // }

  getNumeroFederado(): number {
    return this.numero_federado;
  }

  // getIsActivoMusico(): boolean {
  //   return this.activo_musico;
  // }

  // getIsActivoDirectivo(): boolean {
  //   return this.activo_directivo;
  // }

  // getAceptaBolsaRefuerzos(): boolean {
  //   return this.acepta_bolsa_refuerzos;
  // }

  // getAceptaBolsaProfesores(): boolean {
  //   return this.acepta_bolsa_profesores;
  // }

  // getAceptaBolsaBandaInsular(): boolean {
  //   return this.acepta_bolsa_banda_insular;
  // }

  getAceptaComunicacionesEmail(): boolean {
    return this.acepta_comunicaciones_email;
  }
}
